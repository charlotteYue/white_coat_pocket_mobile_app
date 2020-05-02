import React, {Component} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button, ShadowPropTypesIOS} from 'react-native';

import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
import AdminHome from '../adminHome.js';

class adminAddForm extends Component {
    constructor(props){
        super(props);
        this.state={
            supportSpanish: false,
            name:'',
            description:'',
            contact:'',
            category: '',
            service: '',
            categoryList: [],
            serviceList: [],
        };
    }
    componentDidMount(){
        console.log('herererere');
        this._onFetch();
    }
    _onFetch(){
        const stitchAppClient = Stitch.defaultAppClient;
        console.log('the category chosen is', this.props.categoryList);
        const queryService = {'type': this.state.category};
        const optionService = {"projection": {
        "subtype": 1,
        "_id": 0,
        },};
        const option = {"projection": {
        "type": 1,
        "_id": 0,
        },};
        const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
        stitchAppClient.auth
            .loginWithCredential(new AnonymousCredential())
            .then(() => {
            // Retrieve a database object
            const conn = mongoClient.db('test')

            // Retrieve the collection in the database
            const db = conn.collection('providers')

            // Find 10 documents and log them to console.
            db.find({}, optionService)
                .toArray()
                .then(res => {
                    let listSet = new Set();
                    res.forEach(function(item){
                    listSet.add(item.subtype);
                    })
                    ListArray = new Array();
                    ListArray = Array.from(listSet);
                    this.setState({serviceList: ListArray}, function(){
                    console.log('data is', this.state.serviceList);
                    })
                })
                .catch(console.error)

            })
            .catch(console.error)
    }

  render(){
      let categoryItems = this.props.categoryList.map((item) =>{
          return <Picker.Item value={item.name} label={item.name} />
      })
      let serviceItems = this.state.serviceList.map((item)=>{
          return <Picker.Item value={item} label={item} />
      })
    return (
        <View style={styles.container}>
          <Text style={styles.formLabel}> Add New Medical Services </Text>
          <View>
            <TextInput placeholder="Hospital Name" style={styles.inputStyle} 
            value={this.state.name}
            onChangeText={(input) => this.setState({ name: input })}/>
            <TextInput
            //   secureTextEntry={true}
              placeholder="Hospital description"
              style={styles.inputStyle}
              value={this.state.description}
              onChangeText={(input) => this.setState({ description: input })}
            />
            <TextInput
              placeholder="Hospital Contact"
              style={styles.inputStyle}
              value={this.state.contact}
              onChangeText={(input) => this.setState({ contact: input })}/>
            />
            <Picker
              selectedValue={this.state.category}
              onValueChange={(selectedItem)=> (this.setState({category: selectedItem}))}>
                  {categoryItems}
            </Picker>
            <Text
              style={{
                fontSize: 30,
                color: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Selected: {category}
            </Text>
            <Picker
              selectedValue={this.state.service}
              onValueChange={(selectedItem)=> (this.setState({service: selectedItem}))}>
                  {serviceItems}
            </Picker>
            <Text
              style={{
                fontSize: 30,
                color: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              Selected: {service}
            </Text>
            <Button
              title="Submit"
              color="#fff"
              onPress={() => alert('Simple Button pressed')}
            />
          </View>
        </View>
      );
  }
};
const styles = StyleSheet.create({
  //Check project repo for styles
  container: {
    flex: 1,
    backgroundColor: '#356859',
    alignItems: 'center',
    justifyContent: 'center',
  },

  formLabel: {
    fontSize: 20,
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#b9e4c9',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});

export default AdminHome;