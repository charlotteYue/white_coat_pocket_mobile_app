import React from 'react';
// import {SafeAreaView, StatusBar,StyleSheet} from 'react-native';
import {
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import HeaderComponent from './components/HeaderComponent.js';
import ButtonGridComponent from './components/ButtonGridComponent.js';
import FooterComponent from './components/FooterComponent.js';
// import AdminHome from './pages/adminHome';

 class ClientHome extends React.Component {
   constructor(props){
     super(props);
     this.state={isAdmin:false};
   }
   
   render() {
    const { route }=this.props;
    console.log(route.params);
    let arr=new Array();
    for(var key in route.params){
      arr.push(key)
    }
    let items=new Array();
    for( var a in arr){
      items.push(route.params[a]);
    }
    return (
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.container}>
          <HeaderComponent />
          <ScrollView>
            <ButtonGridComponent
              text="What resources are you looking for today?"
              hint="(Select One)"
              buttons={items}
              navigation={this.props.navigation} 
              name="ClientResources"
              isAdmin={false}
            />
          </ScrollView>
          <FooterComponent
              navigation={this.props.navigation}
              name="Login"
              portal="admin portal"
            />
        </SafeAreaView>
      </>
    );
   }
  
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default ClientHome;
