import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';

class adminAddForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }
  render(){
    return (
        <View style={styles.container}>
          <Text style={styles.formLabel}> Admin Login</Text>
          <View>
            <TextInput 
              placeholder="Username" 
              value={this.state.username}
              onChangeText={(input) => this.setState({ username: input })}
              style={styles.inputStyle}
              />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(input) => this.setState({ password: input })}
              style={styles.inputStyle}
            />
          </View>
          <Button
              title="Submit"
              color="#fff"
              onPress={() => this.props.navigation.navigate("AdminHome")}
            />
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

export default adminAddForm;