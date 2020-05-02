import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Stitch, UserPasswordCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';


class adminAddForm extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }

    _onLoadAdmin(){
      const stitchAppClient = Stitch.defaultAppClient;
      // console.log('client', mongoClient);
      console.log('username is', this.state.username);
      console.log('password is', this.state.password);
      stitchAppClient.auth
        .loginWithCredential(new UserPasswordCredential(this.state.username, this.state.password))
        .then((user) => {
          console.log(`Logged in as user with id: ${user.id}`)
          this.props.navigation.navigate("AdminHome")
        })
        .catch((err)=> {
          console.log(err);
          alert('Username or Password is incorrect');
          this.setState({username: '', password: ''});
          this.props.navigation.navigate("Login");
        })
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
              autoCapitalize = 'none'
              style={styles.inputStyle}
              />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(input) => this.setState({ password: input })}
              autoCapitalize = 'none'
              style={styles.inputStyle}
            />
          </View>
          <Button
              title="Submit"
              color="#fff"
              onPress={() => {
                try{
                  this._onLoadAdmin();
                }catch(err){
                  console.log("error 2 is ", err);
                }
              }}
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