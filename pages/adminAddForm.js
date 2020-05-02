import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';

import AddFormComponent from './components/AddFormComponent.js';

export default class AdminAddForm extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { route }=this.props;
    console.log('catagory list params is', route.params.categoryList);
    return (
      <>
        <SafeAreaView>
          <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back="AdminHome"
          home="AdminHome"/>
          <ScrollView style={{ marginTop: 50 }}>
              <AddFormComponent 
              navigation={this.props.navigation} 
              name="AdminHome"
              categoryList={route.params.categoryList}/>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
