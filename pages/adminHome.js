import React from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Alert, 
  // ScrollView,
  SafeAreaView, 
  StatusBar
} from 'react-native';

import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import CreateButtonComponent from './components/CreateButtonComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { ScrollView } from 'react-native-gesture-handler';
import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';

class AdminHome extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: [],
    };
  }

componentDidMount(){
  this.getCount();
}


  getCount = () =>{

    let categories=this.props.route.params.buttons;
    const stitchAppClient = Stitch.defaultAppClient;
    const mongoClient = Stitch.defaultAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
    stitchAppClient.auth
        .loginWithCredential(new AnonymousCredential())
        .then( () => {
          const conn = mongoClient.db('test')
          const db = conn.collection('providers')
          let arr=new Array();
          for(let i=0;i<categories.length;i++){

            let category=categories[i].name;
            // console.log(`category: ${category}, i: ${i}`)
            db.aggregate([
              {"$match": {"type": `${category}`}},
              {"$group": { "_id": null,"totalCount": {"$sum": "$count"} }}
            ]).toArray()
            .then(res => {
                let obj=new Object();
                obj['name']=category;
                obj['count']=res[0].totalCount;
                // console.log(obj);
                arr.push(obj)
                // console.log(categories.length);
                if(arr.length===categories.length){
                  // console.log(arr);
                  // console.log(obj);
                  this.setState({data:arr}, function(){
                    // console.log('count in button grid');
                    // console.log(this.state.data);
                  })
                }
            }).catch(err => console.error(`Failed to group aggregation: ${err}`))

          }


        }).catch(console.error)
  }


  render() {
    const { route }=this.props;
    console.log('data is :')
    console.log(this.state.data)
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <HeaderComponent />
          <ScrollView>
            <ButtonGridComponent 
            text='Welcome Administrator'
            // buttons={route.params.buttons}
            buttons={this.state.data}
             navigation={this.props.navigation} 
              name="ClientResources" 
              isAdmin={true}/>
            <CreateButtonComponent 
            navigation={this.props.navigation} 
            name="AdminAddForm"
            category={route.params.buttons}
            connection={route.params.connection}
            username={route.params.username}
            password={route.params.password}/>
          </ScrollView>
          <FooterComponent navigation={this.props.navigation} 
            buttons={route.params.buttons}
            name="ClientHome" 
            portal="client portal"
            />
        </SafeAreaView>
  
      </>
    );
  }
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default AdminHome;
