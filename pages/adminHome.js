import React from 'react';
import {
  StyleSheet, 
  View, 
  Text, 
  Alert, 
  // ScrollView,
  SafeAreaView, 
  StatusBar
} from 'react-native';

import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import CreateButtonComponent from './components/CreateButtonComponent.js';
import FooterComponent from './components/FooterComponent.js';
import { ScrollView } from 'react-native-gesture-handler';

function AdminHome({navigation}){
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <HeaderComponent />
        <ScrollView>
          <ButtonGridComponent text='Welcome Administrator'/>
          <CreateButtonComponent />
          <FooterComponent navigation={navigation} name="ClientHome" portal="client portal"/>
        </ScrollView>
      </SafeAreaView>

    </>
  );
};

export default AdminHome;
