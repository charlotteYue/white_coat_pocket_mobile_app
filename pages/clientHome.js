import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import FooterComponent from './components/FooterComponent.js';

const ClientHome: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <HeaderComponent />
        <ButtonGridComponent />
        <FooterComponent />
      </SafeAreaView>
    </>
  );
};

export default ClientHome;
