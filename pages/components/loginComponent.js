import React, {Component} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Stitch, UserPasswordCredential, RemoteMongoClient } from 'mongodb-stitch-react-native-sdk';


class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }

    _onLoadAdmin(){
      const stitchAppClient = Stitch.defaultAppClient;
      const mongoClient = stitchAppClient.getServiceClient(RemoteMongoClient.factory, "mongodb-atlas")
      stitchAppClient.auth
        .loginWithCredential(new UserPasswordCredential(this.state.username, this.state.password))
        .then((user) => {
          console.log(`Logged in as user with id: ${user.id}`);
          const conn = mongoClient.db('test');
          console.log('username is', this.state.username);
          console.log('password is', this.state.password);
          this.props.navigation.navigate("AdminHome", 
          {connection: conn, username: this.state.username, password: this.state.password,buttons: this.props.buttons});
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
              onChangeText={(input) => this.setState(
                //hardcode for testing
                { username: 'admin' })}
                // { username: input })}
              autoCapitalize = 'none'
              style={styles.inputStyle}
              />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              value={this.state.password}
              onChangeText={(input) => this.setState(
                { password: '7iEY28O4b5' })}
                // { password: input })}
              autoCapitalize = 'none'
              style={styles.inputStyle}
            />
          </View>
          <Button
              title="Submit"
              color="#1E88E5"
              onPress={() => {
                try{
                  this._onLoadAdmin();
                }catch(err){
                  console.log(err);
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
    backgroundColor: '#1565C0',
    alignItems: 'center',
    marginTop: "60%",
  },

  formLabel: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#E3F2FD',
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

export default LoginComponent;