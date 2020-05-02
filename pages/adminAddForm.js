import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HeaderWithIconComponent from './components/HeaderWithIconComponent.js';

import AddForm from './components/AddFormComponent.js';

export default class AdminAddForm extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { route }=this.props;
    console.log('params is', route.params.categoryList);
    return (
      <>
        <SafeAreaView>
          <HeaderWithIconComponent 
          navigation={this.props.navigation} 
          back="AdminHome"
          home="AdminHome"/>
          <ScrollView style={{ marginTop: 50 }}>
              <AddForm 
              navigation={this.props.navigation} 
              name="AdminHome"
              categoryList={route.params.categoryList}/>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
