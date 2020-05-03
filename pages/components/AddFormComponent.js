import React, {Component, Fragment} from 'react';
import {Picker, Text, StyleSheet, View, TextInput, Button} from 'react-native';

import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';


import AdminHome from '../adminHome.js';

class AddFormComponent extends Component {
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
        // const queryService = {'type': this.state.category};
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
          <View style={styles.main}>
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
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              Selected: {this.state.category}
            </Text>
            <Picker
              selectedValue={this.state.category}
              style={{width: 150, }}
              onValueChange={(selectedItem)=> (this.setState({category: selectedItem}))}>
                  {categoryItems}
            </Picker>

            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
              }}>
              Selected: {this.state.service}
            </Text>
            <Picker
              selectedValue={this.state.service}
              style={{width: 150}}
              onValueChange={(selectedItem)=> (this.setState({service: selectedItem}))}>
                  {serviceItems}
            </Picker>
            <Button
              title="Submit"
              color="#fff"
              style={{
                marginTop: 20,
              }}
              onPress={() => alert('Simple Button pressed')}
            />
          </View>
        </View>
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
  inputCombination: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
  },

  formLabel: {
    padding: 20,
    fontSize: 20,
    color: '#fff',
  },
  
  inputStyle: {
    marginTop: 10,
    width: 250,
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
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export default AddFormComponent;