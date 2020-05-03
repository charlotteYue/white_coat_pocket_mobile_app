import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatGrid } from 'react-native-super-grid';
 
class ResourcesList extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      showName: false,
      data: [],
      count: 0,
    };
  }

  renderCategory() {
    if (
      this.showName === false ||
      this.showName === undefined
    ) {
      this.showName = true;
      return (
        <Text style={styles.Title}>
          {this.props.categoryName}
        </Text>
      );
    }
    return null;
  }

  componentDidMount(){
    this._onFetch();
  }

  _onFetch = () =>{
    const stitchAppClient = Stitch.defaultAppClient;
    console.log('the category chosen is', this.props.categoryName);
    const query = {'type': this.props.categoryName};
    const option = {"projection": {
      "subtype": 1,
      "_id": 0,
    },};
    const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
    stitchAppClient.auth
        .loginWithCredential(new AnonymousCredential())
        .then(() => {
          // Retrieve a database object
          const conn = mongoClient.db('test')

          // Retrieve the collection in the database
          const db = conn.collection('providers')

          // Find 10 documents and log them to console.
          db.find(query, option)
              .toArray()
              .then(res => {
                let listSet = new Set();
                res.forEach(function(item){
                  listSet.add(item.subtype);
                })
                let ListArray = new Array();
                ListArray = Array.from(listSet);
                // this.setState({data: ListArray}, function(){
                //   console.log('data is', this.state.data);
                // })
                let arr=new Array();
                //  ListArray.forEach(function(subtype) {
                  for( var i=0;i<ListArray.length;i++) {
                    let subtype=ListArray[i];
                   console.log(subtype);
                   db.aggregate([
                    {"$match": {"subtype": `${subtype}`}},
                    {"$group": { "_id": null,"totalCount": {"$sum": "$count"} }}
                  ]).toArray()
                  .then(subRes => {
                    // let map=new Map();
                    // let arr=new Array();
                    // res.forEach(function(item){
                      // map.set(item.subtype,item.totalCount);
                      // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
                      // console.log(`res length: ${res}`)
                      // console.log(res)
                      // console.log(`id: ${res[0]._id}`);
                      // console.log(`totalCount: ${res[0].totalCount}`);
                      // console.log(`subtype: ${subtype}`);
                      // console.log('~~~~~~~~~~~~~~~~~~~~~~~~~')
                      let obj=new Object();
                      
                      obj['subtype']=subtype;
                      obj['totalCount']=subRes[0].totalCount;
                      arr.push(obj)
                      console.log("arr-----------------");
                      console.log(arr)

                      if(i==ListArray.length){
                        this.setState({data:arr},function (){
                          console.log('data is');
                          console.log(this.state.data);
                        })
                      }
                      // this.setState({countObj:obj})
                    // })
                    // console.log('arr');
                    // console.log(arr);
                    // this.setState({countArr:arr})
                    // console.log(`map res: ${map}`)
                    // this.setState({countMap:map});
                  }).catch(err => console.error(`Failed to group aggregation: ${err}`))
                 
                  console.log('arr is~~~~~~~~~~~~');
                  console.log(arr);
                 
                  }

                //   this.setState({data: arr}, function(){
                //   console.log('data is');
                //   console.log(arr);
                // })









              })
              .catch(console.error)
        })
        .catch(console.error)
  }


  onPress(props,item,isAdminPortal){
    console.log('isAdmin in respurse list');
    console.log(isAdminPortal)
    props.navigation.navigate(this.props.name, {serviceName: item, categoryName: this.props.categoryName, isAdmin: isAdminPortal})
    this.setState({count:item.count+1})
    if(!isAdminPortal){
      this._updateCount();
    }
  }

  _updateCount() {
    console.log('count');
    console.log(this.state.count);
    //update db
  }


  render() {
    function Count(props) {
      console.log('count isadmin in resource');
      console.log(props)
      if(props.isAdmin){
        return <Text style={styles.itemCount}>Count: {props.count}</Text>;
      }
      else{
        return <></>;
      }
    }

    return this.state.data.map(
      (item) => {
        return (
          <ScrollView>
            <View style={styles.container}>
              <Image
                source={{
                  uri:
                    'https://www.pikpng.com/pngl/m/170-1708125_medical-icon-png-medical-icon-clipart.png',
                }}
                style={styles.photo}
              />

              <TouchableOpacity style={styles.container_text} onPress={() => this.onPress(this.props,item.subtype,this.props.isAdmin)}>
                    <View>
                    <Text style={styles.title}>{item.subtype}</Text>
                    {/* add a item.count; */}
                    <Count isAdmin={this.props.isAdmin} count={item.totalCount}/>
                    </View>
                
              </TouchableOpacity>
            </View>
          </ScrollView>
        );
      }
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#B2DFDB',
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: "center",
  },
  photo: {
    height: 60,
    width: 60,
  },
  Title: {
    marginTop: 20,
    fontSize: 30,
  },

  itemCount: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: 100,
  },
});

export default ResourcesList;
