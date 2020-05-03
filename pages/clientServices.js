import React,{ Component } from 'react';

import {SafeAreaView, View, StyleSheet} from 'react-native';
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
<<<<<<< HEAD
          <HeaderWithIconComponent 
          navigation={this.props.navigation} 
=======
          <HeaderWithIconComponent
          navigation={this.props.navigation}
>>>>>>> 595e478042367250c08a92b4dda56c06739accaa
          back="ClientResources"
          home={this.navHome()}/>
          <SegmentTab
            categoryName={route.params.categoryName}
            serviceName ={route.params.serviceName}
            />
          <View style={styles.middle}>
            <ServicesList
            serviceName ={route.params.serviceName}
            categoryName = {route.params.categoryName}
            isAdmin={route.params.isAdmin}/>
          </View>
          <Footer />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch",
    width: "100%",
  },

})


export default ClientServices;
