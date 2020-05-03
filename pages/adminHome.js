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

// function AdminHome({navigation})
class AdminHome extends React.Component{
  constructor(props){
    super(props);
    // this.state={isAdmin:true};
  }
  render() {
    const { route }=this.props;
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <HeaderComponent />
          <ScrollView>
            <ButtonGridComponent 
            text='Welcome Administrator'
            buttons={route.params.buttons}
             navigation={this.props.navigation} 
              name="ClientResources" 
              isAdmin={true}/>
            <CreateButtonComponent 
            navigation={this.props.navigation} 
            name="AdminAddForm"
            category={route.params.buttons}
            connection={route.params.connection}
            username={route.params.username}
            password={route.params.password}/>
          </ScrollView>
          <FooterComponent navigation={this.props.navigation} 
            buttons={route.params.buttons}
            name="ClientHome" 
            portal="client portal"
            />
        </SafeAreaView>
  
      </>
    );
  }
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default AdminHome;
