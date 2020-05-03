import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ResourcesList from './components/ResourcesList.js';
import Footer from './components/FooterComponent.js';
import SegmentTab from './components/segmentTabBar.js';

export default class ClientResources extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { route }=this.props;
    return (
      <>
        <SafeAreaView>
          <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back="ClientHome"
          home="ClientHome"/>
          <ScrollView style={{ marginTop: 50 }}>
            <SegmentTab 
            categoryName={route.params.categoryName}
            />
            <ResourcesList 
            categoryName={route.params.categoryName}
            navigation={this.props.navigation} 
            name="ClientServices"/>
            <Footer />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}