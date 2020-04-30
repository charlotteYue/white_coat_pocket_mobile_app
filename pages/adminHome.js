import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';

import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import CreateButtonComponent from './components/CreateButtonComponent.js';
import FooterComponent from './components/FooterComponent.js';

const AdminHome: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <HeaderComponent />
        <ButtonGridComponent text='Welcome Administrator'/>
        <CreateButtonComponent />
        <FooterComponent portal='client portal' />
      </SafeAreaView>

    </>
  );
};


export default AdminHome;
