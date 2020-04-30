import React from 'react';

import {SafeAreaView, ScrollView} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import ServicesList from './components/ServicesList.js';
import Footer from './components/FooterComponent.js';
import SegmentTab from './components/segmenTabBar.js';
const ClientServices: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <HeaderWithIconComponent />
        <ScrollView style={{marginTop: 50}}>
          <SegmentTab />
          {/* <ServicesList /> */}
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ClientServices;
