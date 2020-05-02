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

// function AdminHome({navigation})
class AdminHome extends React.Component{
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
        <SafeAreaView style={styles.container}>
          <HeaderComponent />
          <ScrollView>
            <ButtonGridComponent text='Welcome Administrator' buttons={items}/>
            <CreateButtonComponent 
            navigation={this.props.navigation} 
            name="AdminAddFrom"
            category={items}/>
          </ScrollView>
          <FooterComponent navigation={this.props.navigation} 
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
