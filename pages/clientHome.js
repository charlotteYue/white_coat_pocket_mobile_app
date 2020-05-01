import React from 'react';
// import {SafeAreaView, StatusBar,StyleSheet} from 'react-native';
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import FooterComponent from './components/FooterComponent.js';
// import AdminHome from './pages/adminHome';

function ClientHome({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <HeaderComponent />
        <ScrollView>
          <ButtonGridComponent
            text="What resources are you looking for today?"
            hint="(Select One)"
            navigation={navigation}
            name="ClientResources"
            portal="client portal"
          />
          <FooterComponent
            navigation={navigation}
            name="AdminHome"
            portal="admin portal"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default ClientHome;
