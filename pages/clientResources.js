import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Container, Content } from 'native-base';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ResourcesList from './components/ResourcesList.js';
import Footer from './components/FooterComponent.js';
import SegmentTab from './components/segmenTabBar.js';

export default class ClientResources extends Component {
  render() {
    return (
      <>
        <SafeAreaView>
          <HeaderWithIconComponent />
          <ScrollView style={{ marginTop: 50 }}>
            <SegmentTab categoryName="healthcare Services"/>
            <ResourcesList />
            <Footer />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
