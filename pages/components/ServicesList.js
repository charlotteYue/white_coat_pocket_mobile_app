import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import {ListAccordion, ListItem, Checkbox} from 'react-native-paper';

import {Collapse, CollapseHeader, CollapseBody} from "accordion-collapse-react-native";
import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';


class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showName: false,
      data: [],
    };
  }

  componentDidMount(){
    this._onFetch();
    this._renderServiceName();
  }

  _renderServiceName() {
    console.log('get Service name');
    if (this.showName === false || this.showName === undefined) {
      this.showName = true;
      return (
        <Text style={styles.Title}>{this.props.serviceName}</Text>
      );
    } else {
      return null;
    }
  }

  _onFetch = () => {
    const stitchAppClient = Stitch.defaultAppClient;
    console.log('the category chosen is', this.props.categoryName);
    console.log('the service chosen is', this.props.serviceName);
    const query = {'type': this.props.categoryName, 'subtype': this.props.serviceName };
    const option = {"projection": {
      "name": 1,
      "phone": 1,
      "description": 1,
      "supportSpanish": 1,
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
          let hospitalList = new Array()
          db.find(query, option)
              .toArray()
              .then(res => {
                console.log('res is', res);
                let hospitalList = new Array()
                res.forEach(function(item){
                  let instance = new Object();
                  instance["name"] = item.name;
                  instance["phone"] = item.phone;
                  instance["description"] = item.description;
                  instance["supportSpanish"] = item.supportSpanish;
                  hospitalList.push(instance);
                })
                this.setState({data: hospitalList}, function(){
                  // console.log('data is', this.state.data);
                })
              })
              .catch(console.error)
        })
        .catch(console.error)
  }
  
  render() {
    return this.state.data.map(
      (item) => {
        return(
          <View style={styles.main}>
          <Collapse style={{borderBottomWidth:1,borderTopWidth:1}}>
            <CollapseHeader style={styles.container}>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </CollapseHeader>
            <CollapseBody style={{alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <Text style={styles.subtext}>{item.phone}</Text>
              <Text style={styles.subtext}>{item.description}</Text>
            </CollapseBody>
          </Collapse>
        </View>
        )
      }
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#356859",
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#B2DFDB',
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  description: {
    fontSize: 10,
  },
  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtext: {
    color: "#b9e4c9",
  }
});

export default ServiceList;
