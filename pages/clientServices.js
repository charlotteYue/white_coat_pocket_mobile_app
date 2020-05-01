import React,{ Component } from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ServicesList from './components/ServicesList.js';
import Footer from './components/FooterComponent.js';
import SegmentTab from './components/segmenTabBar.js';


export default class ClientResources extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <>
        <SafeAreaView>
          <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back="ClientResources"
          home="ClientHome"/>
          <ScrollView style={{marginTop: 50}}>
            <SegmentTab />
            {/* <ServicesList /> */}
            <Footer />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
