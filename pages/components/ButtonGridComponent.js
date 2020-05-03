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

class ButtonGridComponent extends React.Component {
constructor(props){
  super(props);
  this.onPress = this.onPress.bind(this);
  this.state={
    count: -1,
  };

}
  onPress(item,isAdminPortal) {
    // console.log('isAdmin');
    // console.log(isAdminPortal)
    this.props.navigation.navigate(this.props.name, {categoryName: item.name, isAdmin: isAdminPortal});
    this.setState({count:item.count+1})
    if(!isAdminPortal){
      this._updateCount();
    }
  
  }

  _updateCount() {
    console.log('count');
    console.log(this.state.count);
    //update db
  }

  render() {
    
    function Count(props) {
      if(props.isAdmin){
        // return <Text style={styles.itemCount}>Count: {props.count}</Text>;
        return <Text style={styles.itemCount}>{props.count}</Text>;
      }
      else{
        return <></>;
      }
    }

    
    return (
      <ScrollView>
        <View style={styles.intro}>
          <Text style={styles.introText}>
            The White Coat Pocket Guide aims to inform providers about the
            essentials of navigating community resources and social services.
          </Text>
        </View>
  
        <View style={styles.buttonContainer}>
          <View>
            <Text style={styles.buttonIntroText}>
              {this.props.text}
            </Text>
              <Text style={styles.buttonHintText}>{this.props.hint}</Text>
          </View>
        </View>
  
        {/* <ScrollView > */}
        <SafeAreaView>
          <FlatGrid
            itemDimension={100}
            items={this.props.buttons}
            style={styles.gridView}
            renderItem={({item}) => (
              <View>
                <View style={styles.itemContainer}>
                  <TouchableHighlight
                    activeOpacity={1}
                    style={styles.mainBtn}
                    underlayColor="#fff"
                    onPress={() => this.onPress(item,this.props.isAdmin)}>
                    <View style={styles.textContainer}>
                      <Text style={styles.itemName}>{item.name}</Text>
                      <View style={styles.countContainer}>
                        <Count isAdmin={this.props.isAdmin} count={item.count}/>
                      </View>
                    </View>
                  </TouchableHighlight>
                  {/* <Text style={styles.itemName}>{item.name}</Text> */}
                  {/* <Count isAdmin={this.props.isAdmin} count={item.count}/> */}
                </View>
                {/* <Text style={styles.itemName}>{item.name}</Text> */}
              </View>
            )}
          />
        {/* </ScrollView> */}
        </SafeAreaView>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  intro: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },

  introText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#B2DFDB',
    marginBottom: '10%',
  },

  buttonContainer: {
    margin: 10,
  },

  buttonIntroText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  buttonHintText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#fff',
    textAlign: 'center',
  },

  gridView: {
    flex: 1,
  },

  itemContainer: {
    marginTop: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    height: 100,
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: "column",
  },

  mainBtn: {
    height: 110,
    width: 110,
    borderRadius: 20,
    backgroundColor: '#b9e4c9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemName: {
    textAlign: 'center',
    color: '#004D40',
    fontWeight: 'bold',
    fontSize: 15,
    maxWidth: 100,
  },

  countContainer: {
    position: "absolute",
    bottom: 0,
  },

  itemCount: {
    textAlign: 'center',
    color: '#004D40',
    fontWeight: 'bold',
    fontSize: 24,
    maxWidth: 100,
  },
});

export default ButtonGridComponent;
