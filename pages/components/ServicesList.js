import React, {Component} from 'react';
import {View, Text, StyleSheet, Alert, TouchableOpacity, FlatList, ScrollView} from 'react-native';
// import {ListAccordion, ListItem, Checkbox} from 'react-native-paper';

import {Collapse, CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import { Stitch, AnonymousCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';
import { Row } from 'native-base';
// import { ScrollView } from 'react-native-gesture-handler';


class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      showName: false,
      data: [],
      serviceItemName: '',
    };
  }

  componentDidMount() {
    this._onFetch();
    this._renderServiceName();
  }

  _renderServiceName() {
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
    const query = {'type': this.props.categoryName, 'subtype': this.props.serviceName };
    const option = {'projection': {
      'name': 1,
      'phone': 1,
      'description': 1,
      'supportSpanish': 1,
      '_id': 0,
      'count': 1,
    }, };
    const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    stitchAppClient.auth
        .loginWithCredential(new AnonymousCredential())
        .then(() => {
          // Retrieve a database object
          const conn = mongoClient.db('production');

          // Retrieve the collection in the database
          const db = conn.collection('providers');

          // Find 10 documents and log them to console.
          db.find(query, option)
              .toArray()
              .then(res => {
                if (res.length === 0) {
                  Alert.alert('no content for your selection');
                  return;
                }
                const hospitalList = new Array();
                res.forEach(function(item) {
                  const instance = new Object();
                  instance['name'] = item.name;
                  instance['phone'] = item.phone;
                  instance['description'] = item.description;
                  instance['supportSpanish'] = item.supportSpanish;
                  instance['count'] = item.count;
                  hospitalList.push(instance);
                });
                this.setState({data: hospitalList}, function() {
                });
              })
              .catch(console.error);
        })
        .catch(console.error);
  }


  onPress(props, item, isAdminPortal) {
    if (!isAdminPortal) {
      this._updateCount(item);
    }

  }

  _updateCount=(item) => {

    this.setState({serviceItemName: item.name});
    const stitchAppClient = Stitch.defaultAppClient;
    const query = {'name': item.name };
    const update = {'$inc': {'count': 1}};
    const options = { 'upsert': false };
    const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas');
    stitchAppClient.auth
        .loginWithCredential(new AnonymousCredential())
        .then(() => {
          const conn = mongoClient.db('production');
          const db = conn.collection('providers');
          db.updateOne(query, update, options).then(result => {
            const { matchedCount, modifiedCount } = result;
            if (matchedCount && modifiedCount) {
              // console.log(`Successfully updated the item.`)
              // console.log(matchedCount);
              // console.log(modifiedCount);
            }
          })
          .catch(err => console.error(`Failed to update the item: ${err}`));
        })
        .catch(console.error);
  }


  render() {

    function Count(props) {
      if (props.isAdmin) {
        return <Text 
        accessible={true}
        accessibilityLabel={`the count for ${props.name} is ${props.count}`}
        style={styles.itemCount}>{props.count}</Text>;
      }
      else {
        return <></>;
      }
    }
    function Contact(props) {
      if (props.contact === '') {
        return <></>;
      } else {
        return <Text style={styles.subtext}>Contact: {props.contact}</Text>;
      }
    }

    function Description(props) {
      if (props.description === '') {
        return <></>;
      } else {
        return <Text style={styles.subtext}>Description: {props.description}</Text>;
      }
    }

    return (
        <FlatList style={styles.scrolling}
            data={this.state.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) =>
                <View style={{flex: 1}}>
                  <Collapse>
                    <CollapseHeader style={styles.container}  >
                      <TouchableOpacity style={styles.textContainer} onPress={() => this.onPress(this.props, item, this.props.isAdmin)}>
                        <View style={styles.itemContainer}
                        >
                          <Text style={styles.text}
                          accessible={true}
                          accessibilityLabel={item.name}
                          accessibilityRole={'button'}>{item.name}</Text>
                          <View style={styles.countContainer}>
                            <Count isAdmin={this.props.isAdmin} count={item.count} name={item.name}/>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </CollapseHeader>
                    <CollapseBody style={styles.details}>
                      <Contact contact={item.phone} />
                      <Description description={item.description} />
                      {/* <Text style={styles.subtext}>Contact: {item.phone}</Text>
                      <Text style={styles.subtext}>Description: {item.description}</Text> */}
                    </CollapseBody>
                  </Collapse>
                </View>}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    flexDirection: 'row',
    padding: 20,
    borderWidth: 0.5,
    backgroundColor: '#BBDEFB',
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderColor: '#90CAF9',
    // height: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // height: 50,
  },
  description: {
    fontSize: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D47A1',
    // height: 50,
  },
  subtext: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  itemCount: {
    textAlign: 'center',
    color: '#448AFF',
    fontWeight: 'bold',
    fontSize: 20,
    maxWidth: 100,
    marginLeft: 10,
  },
  itemContainer: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: "center",
  },
  scrolling: {
    marginBottom: 60,
  },
  details: {
    marginLeft: 30,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'baseline', 
    justifyContent: 'center', 
    flexDirection: 'column'
  }
});

export default ServiceList;
