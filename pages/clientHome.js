import React from 'react';
// import {SafeAreaView, StatusBar,StyleSheet} from 'react-native';
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import FooterComponent from './components/FooterComponent.js';
// import AdminHome from './pages/adminHome';

 class ClientHome extends React.Component {
   render() {
    const { route }=this.props;
    console.log(route.params);
    let arr=new Array();
    for(var key in route.params){
      arr.push(key)
    }
    let items=new Array();
    for( var a in arr){
      items.push(route.params[a]);
    }
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <HeaderComponent />
          <ScrollView>
            <ButtonGridComponent
              text="What resources are you looking for today?"
              hint="(Select One)"
              buttons={items}
              navigation={this.props.navigation} 
              name="ClientResources"
            />
            <FooterComponent
              navigation={this.props.navigation}
              name="Login"
              portal="admin portal"
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
   }
  
}

export default ClientHome;
