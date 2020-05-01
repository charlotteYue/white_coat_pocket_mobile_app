import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
  } from 'react-native';
  import Icon from 'react-native-vector-icons/FontAwesome';
//   <Icon name="rocket" size={30} color="#900" />;

// function CreateButtonComponent() 
class CreateButtonComponent extends React.Component {
  render() {
    return (
      <View style={styles.main}>
            <View style={styles.itemContainer}>
              <Icon name="plus-square-o" size={120}  color='#9DC8EC'
              onPress={() => Alert.alert('pressed!')}/>
            </View>
            <Text style={styles.itemName}>Create A Category</Text>
      </View>
  );
  }
    
}

const styles=StyleSheet.create({
    main: {
        backgroundColor: '#ffffff',
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
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
})

export default CreateButtonComponent;