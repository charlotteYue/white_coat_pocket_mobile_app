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
import { Row } from 'native-base';
 
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
                ListArray = new Array();
                ListArray = Array.from(listSet);
                this.setState({data: ListArray}, function(){
                  console.log('data is', this.state.data);
                })
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
              {/* <View style={styles.container_text}>
                <Text style={styles.title} onPress={() => 
                  this.props.navigation.navigate(this.props.name, 
                  {serviceName: item, categoryName: this.props.categoryName})}>
                  {item}
                </Text>
                
              </View> */}

              <TouchableOpacity style={styles.container_text} onPress={() => this.onPress(this.props,item,this.props.isAdmin)}>
                    <View style={styles.itemContainer}>
                      <Text style={styles.title}>{item}</Text>
                      {/* add a item.count; */}
                      <View style={styles.countContainer}>
                        <Count isAdmin={this.props.isAdmin} count={item.count}/>
                      </View>
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
  itemCount: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    maxWidth: 100,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
    // alignItems: "center",
  },
  countContainer: {
    position: "absolute",
    bottom: 0,
  },
  count: {
    color: "#fff",
  }
});

export default ResourcesList;
