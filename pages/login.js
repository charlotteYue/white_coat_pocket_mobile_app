import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar
} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';
import LoginComponent from './components/loginComponent.js';
import FooterComponent from './components/FooterComponent.js';


class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { route }=this.props;
    return (
      <>
        <SafeAreaView style={styles.container}>
        <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back="ClientHome"
          home="ClientHome"/>
          <ScrollView>
            <LoginComponent navigation={this.props.navigation} buttons={route.params.buttons}/>
          </ScrollView>
          <FooterComponent style={styles.footer} />
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#356859',
  },
})

export default Login;