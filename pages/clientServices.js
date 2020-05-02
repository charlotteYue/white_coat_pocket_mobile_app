import React,{ Component } from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ServicesList from './components/ServicesList.js';
import Footer from './components/FooterComponent.js';
import SegmentTab from './components/segmentTabBar.js';


export default class ClientServices extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {route} = this.props;
    console.log('here in the clientService file');
    console.log('service chosen is ', route.params.serviceName);
    console.log('service chosen is ', route.params.categoryName);
    return (
      <>
        <SafeAreaView>
          <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back="ClientResources"
          home="ClientHome"/>
          <ScrollView style={{marginTop: 50}}>
            <SegmentTab />
            <ServicesList 
            serviceName ={route.params.serviceName}
            categoryName = {route.params.categoryName}/>
            <Footer />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
