import React from 'react';
import {
  StyleSheet,
  // ScrollView,
  SafeAreaView,
  View,
  Text,
  Alert,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import {FlatGrid} from 'react-native-super-grid';
import { ScrollView } from 'react-native-gesture-handler';

const items = [
  {name: 'Substance Use'},
  {name: 'Mental Health'},
  {name: 'Healthcare'},
  {name: 'IPV'},
  {name: 'Immigration'},
  {name: 'Housing'},
  {name: 'Lifestyle'},
  {name: 'LGBTQ+'},
  {name: 'Housing'},
];

// const windowHeight = Dimensions.get('window').height;

function ButtonGridComponent(props) {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.intro}>
        <Text style={styles.introText}>
          The White Coat Pocket Guide aims to inform providers about the
          essentials of navigating community resources and social services.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View>
          <Text style={styles.buttonIntroText}>
            {props.text}
          </Text>
            <Text style={styles.buttonHintText}>{props.hint}</Text>
        </View>
      </View>

      {/* <ScrollView > */}
      <SafeAreaView>
        <FlatGrid
          itemDimension={100}
          items={items}
          style={styles.gridView}
          renderItem={({item}) => (
            <View>
              <View style={styles.itemContainer}>
                <TouchableHighlight
                  activeOpacity={1}
                  style={styles.mainBtn}
                  underlayColor="#649cf5"
                  onPress={() => Alert.alert('pressed!')}>
                  <View />
                </TouchableHighlight>
              </View>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          )}
        />
      {/* </ScrollView> */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ffffff',
    // alignItems: 'center',
    // flexDirection:'column',
    // flex: 1 ,
  },
  intro: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  introText: {
    textAlign: 'center',
    fontSize: 15,
  },

  buttonContainer: {
    margin: 10,
  },

  buttonIntroText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#649cf5',
    textAlign: 'center',
  },

  buttonHintText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#949292',
    textAlign: 'center',
  },

  gridView: {
    flex: 1,
  },

  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    height: 100,
  },

  mainBtn: {
    height: 100,
    width: 100,
    borderRadius: 15,
    backgroundColor: '#e1ebf0',
  },
  itemName: {
    textAlign: 'center',
  },
});

export default ButtonGridComponent;
