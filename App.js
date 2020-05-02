import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Stitch,
  AnonymousCredential,
} from 'mongodb-stitch-react-native-sdk';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientHome from './pages/clientHome.js';
import AdminHome from './pages/adminHome';
import ClientResources from './pages/clientResources.js';
import ClientServices from './pages/clientServices.js';
import AdminAddForm from './pages/adminAddForm.js'
import Login from './pages/login.js';

const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUserId: undefined,
      client: undefined,
    };
    this._loadClient = this._loadClient.bind(this);
    this._onPressLogin = this._onPressLogin.bind(this);
    this._onPressLogout = this._onPressLogout.bind(this);
  }


  componentDidMount() {
    this._loadClient();
  }

  render() {
    let loginStatus = 'Currently logged out.';
    const items = [
      {name: 'Healthcare Services', count:0},
      {name: 'Specialty Healthcare', count:0},
      {name: 'Behavioral Health', count:0},
      {name: 'Behavioral Health Cont', count:0},
      {name: 'Interpersonal Violence', count:0},
      {name: 'Immigration', count:0},
      {name: 'Housing', count:0},
      {name: 'LGBTQ+', count:0},
      {name: 'Lifestyle', count:0},
    ];
    
    if (this.state.currentUserId) {
      loginStatus = `Currently logged in as ${this.state.currentUserId}!`;}

    loginButton = (
      <Button
        onPress={this._onPressLogin}
        title="Login"
      />
    );

    logoutButton = (
      <Button
        onPress={this._onPressLogout}
        title="Logout"
      />
    );

    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="ClientHome"
              component={ClientHome}
              // options={{ title: 'Welcome' }}
              initialParams={items}
            />
            <Stack.Screen
              name="AdminHome"
              component={AdminHome}
              initialParams={items}
            />
            <Stack.Screen
              name="ClientResources"
              component={ClientResources}
              // initialParams={isAdmin=false}
            />
            <Stack.Screen
              name="ClientServices"
              component={ClientServices}
              // initialParams={isAdmin=false}
            />
            <Stack.Screen
              name="AdminAddFrom"
              component={AdminAddForm}
            />
            <Stack.Screen
              name="Login"
              component={Login}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }

  async _loadClient() {
    console.log('here in app.js');
    await Stitch.initializeDefaultAppClient(
      'wcpg-bxtzi'
    ).then(client => {
      this.setState({ client });
      if (client.auth.isLoggedIn) {
        this.setState({
          currentUserId: client.auth.user.id,
        });
      }
    });
  }

  _onPressLogin() {
    this.state.client.auth
      .loginWithCredential(
        new AnonymousCredential()
      )
      .then(user => {
        console.log(
          `Successfully logged in as user ${
            user.id
          }`
        );
        this.setState({ currentUserId: user.id });
      })
      .catch(err => {
        console.log(
          `Failed to log in anonymously: ${err}`
        );
        this.setState({
          currentUserId: undefined,
        });
      });
  }

  _onPressLogout() {
    this.state.client.auth
      .logout()
      .then(user => {
        console.log(`Successfully logged out`);
        this.setState({
          currentUserId: undefined,
        });
      })
      .catch(err => {
        console.log(`Failed to log out: ${err}`);
        this.setState({
          currentUserId: undefined,
        });
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
