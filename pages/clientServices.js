import React,{ Component } from 'react';

import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ServicesList from './components/ServicesList.js';
import Footer from './components/FooterComponent.js';
import SegmentTab from './components/serviceSegmentTab.js';


class ClientServices extends Component {
  constructor(props){
    super(props);
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

  render() {
    const {route} = this.props;
    console.log('here in the clientService file');
    console.log('service chosen is ', route.params.serviceName);
    console.log('service chosen is ', route.params.categoryName);
    return (
      <>
        <SafeAreaView style={styles.container}>
          <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back="ClientResources"
          home={this.navHome()}/>
          <SegmentTab 
            categoryName={route.params.categoryName}
            serviceName ={route.params.serviceName}
            />
          <ScrollView>
            <ServicesList 
            serviceName ={route.params.serviceName}
            categoryName = {route.params.categoryName}
            isAdmin={route.params.isAdmin}/>
            <Footer />
          </ScrollView>
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


export default ClientServices;