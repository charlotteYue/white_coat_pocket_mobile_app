import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar
} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ResourcesList from './components/ResourcesList.js';
import FooterComponent from './components/FooterComponent.js';
import SegmentTab from './components/segmentTabBar.js';

class ClientResources extends Component {
  constructor(props){
    super(props);
    this.navBack = this.navBack.bind(this);
    this.navHome = this.navBack.bind(this);
  }

  navBack(){
    console.log('navback')
    const isAdmin=this.props.route.params.isAdmin;
    console.log(isAdmin);
    if(isAdmin){
      console.log("admin home")
      return "AdminHome"
    }else{
      console.log("client home")
      return "ClientHome"
    }
  }

  navHome(){
    console.log('navhome')
    const isAdmin=this.props.route.params.isAdmin;
    console.log(isAdmin);
    if(isAdmin){
      console.log("admin home")
      return "AdminHome"
    }else{
      console.log("client home")
      return "ClientHome"
    }
  }

  // navHome
  render() {
    const { route }=this.props;
    return (
      <>
        <SafeAreaView style={styles.container}>
        <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back={this.navBack()}
          home={this.navHome()}/>
          <SegmentTab 
            categoryName={route.params.categoryName}
            />
          <ScrollView>
            <ResourcesList 
            categoryName={route.params.categoryName}
            navigation={this.props.navigation} 
            name="ClientServices"
            isAdmin={route.params.isAdmin}/>
          </ScrollView>
          <FooterComponent style={styles.footer} />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#356859',
  },
})

export default ClientResources;