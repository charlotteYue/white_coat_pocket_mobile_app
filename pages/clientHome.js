import React from 'react';
// import {SafeAreaView, StatusBar,StyleSheet} from 'react-native';
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
 
class ClientHome extends React.Component {
   constructor(props){
     super(props);
     this.state={
      currentUserId: undefined,
      client: undefined,
      data: [],
     };
     this._loadClient = this._loadClient.bind(this);
    // this._onPressLogin = this._onPressLogin.bind(this);
    // this._onPressLogout = this._onPressLogout.bind(this);
    this._getCategories=this._getCategories.bind(this)
   }
   
   async componentDidMount(){
    await this._loadClient();
    this._getCategories();
  }

  // async _loadClient() {
  //   console.log('here in app.js');
  //   await Stitch.initializeDefaultAppClient(
  //     'wcpg-bxtzi'
  //   ).then(client => {
  //     this.setState({ client });
  //     if (client.auth.isLoggedIn) {
  //       this.setState({
  //         currentUserId: client.auth.user.id,
  //       });
  //     }
  //   });
  // }

  // _onPressLogin() {
  //   this.state.client.auth
  //     .loginWithCredential(
  //       new AnonymousCredential()
  //     )
  //     .then(user => {
  //       console.log(
  //         `Successfully logged in as user ${
  //           user.id
  //         }`
  //       );
  //       this.setState({ currentUserId: user.id });
  //     })
  //     .catch(err => {
  //       console.log(
  //         `Failed to log in anonymously: ${err}`
  //       );
  //       this.setState({
  //         currentUserId: undefined,
  //       });
  //     });
  // }

  async _loadClient() {
    console.log('here in app.js');
    await Stitch.initializeDefaultAppClient(
      'wcpg-bxtzi'
    ).then(client => {
      this.setState({ client });
      if (client.auth.isLoggedIn) {
        this.setState({
          currentUserId: client.auth.user.id,
        });
      }
    });
  }

  _getCategories= () => {
    console.log("here in client")
    const stitchAppClient = Stitch.defaultAppClient;
    // console.log('the category chosen is', this.props.categoryName);
    const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
    // const query = {'type': 'Housing' };
    // const projection = {"projection": {
    //   "type": 1,
    //   "_id": 0,
    // },};
    stitchAppClient.auth
        .loginWithCredential(new AnonymousCredential())
        .then(() => { 
          const conn = mongoClient.db('test')
          const db = conn.collection('providers')
          db.aggregate(
            [{"$group": { "_id": "$type" }}]
          )
          .toArray()
          .then( res => {
            // console.log('---------------------');
            // console.log(res[0]);
            let arr=new Array();
            let obj=new Object();
            for(var i=0;i<res.length;i++){
              let obj=new Object();
              obj["name"]=res[i]._id;
              arr.push(obj);
            }
            // console.log(arr);
            this.setState({data:arr}, function() {
                console.log(this.state.data);
              })
            // if(arr.length===res.length){
            //   this.setState({data:arr}, function() {
            //     // console.log(this.state.data);
            //   })
            // }
          }).catch(err => console.error(`Failed to group aggregation: ${err}`))

        }).catch(console.error)

  }

   render() {
    const items = this.state.data;
    console.log(items);
    let loginStatus = 'Currently logged out.';
    
    if (this.state.currentUserId) {
      loginStatus = `Currently logged in as ${this.state.currentUserId}!`;}

    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <HeaderComponent />
          <ScrollView>
            <ButtonGridComponent
              text="What resources are you looking for today?"
              hint="(Select One)"
              buttons={items}
              navigation={this.props.navigation} 
              name="ClientResources"
              isAdmin={false}
            />
          </ScrollView>
          <FooterComponent
              navigation={this.props.navigation}
              buttons={items}
              name="Login"
              portal="Admin portal"
            />
        </SafeAreaView>
      </>
    );
   }
  
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ClientHome;
