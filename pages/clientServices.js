import React, { Component } from 'react';

import {SafeAreaView, View, StyleSheet} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ServicesList from './components/ServicesList.js';
import Footer from './components/FooterComponent.js';
import SegmentTab from './components/serviceSegmentTab.js';


class ClientServices extends Component {
  constructor(props) {
    super(props);
  }


  navHome() {
    const isAdmin = this.props.route.params.isAdmin;
    if (isAdmin) {
      return 'AdminHome';
    } else {
      return 'ClientHome';
    }
  }

  render() {
    const {route} = this.props;
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
          <View style={styles.middle}>
            <ServicesList
            serviceName ={route.params.serviceName}
            categoryName = {route.params.categoryName}
            isAdmin={route.params.isAdmin}/>
          </View>
          <Footer 
          navigation={this.props.navigation}
          feedback="Feedback"/>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1565C0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  middle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
  },

});


export default ClientServices;
