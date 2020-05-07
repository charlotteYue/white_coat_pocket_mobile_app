if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ClientHome from './pages/clientHome.js';
import AdminHome from './pages/adminHome';
import ClientResources from './pages/clientResources.js';
import ClientServices from './pages/clientServices.js';
import AdminAddForm from './pages/adminAddForm.js';
import Login from './pages/login.js';
import Feedback from './pages/feedback.js';
import AdminFeedback from './pages/adminFeedback.js';

const Stack = createStackNavigator();


export default class App extends React.Component {
  constructor() {
    super();
<<<<<<< HEAD
    // this.state = {
    //   currentUserId: undefined,
    //   client: undefined,
    // };
    // this._loadClient = this._loadClient.bind(this);
    // this._onPressLogin = this._onPressLogin.bind(this);
    // this._onPressLogout = this._onPressLogout.bind(this);
  }


  componentDidMount() {
  //  this._loadClient();
  }

  render() {
    // let loginStatus = 'Currently logged out.';
    
    // if (this.state.currentUserId) {
    //   loginStatus = `Currently logged in as ${this.state.currentUserId}!`;}

    // loginButton = (
    //   <Button
    //     onPress={this._onPressLogin}
    //     title="Login"
    //   />
    // );

    // logoutButton = (
    //   <Button
    //     onPress={this._onPressLogout}
    //     title="Logout"
    //   />
    // );
=======
  }
  render() {
>>>>>>> blue-version
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
            />
            <Stack.Screen
              name="AdminHome"
              component={AdminHome}
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
              name="AdminAddForm"
              component={AdminAddForm}
            />
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="Feedback"
              component={Feedback}
            />
            <Stack.Screen
              name="AdminFeedback"
              component={AdminFeedback}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
<<<<<<< HEAD

  // async _loadClient() {
  //   console.log('here in app.js');
  //   await Stitch.initializeDefaultAppClient(
  //     'wcpg-bxtzi'
  //   ).then(client => {
  //     this.setState({ client });
  //     if (client.auth.isLoggedIn) {
  //       this.setState({
  //         currentUserId: client.auth.user.id,
  //       });
  //     }
  //   });
  // }

  // _onPressLogin() {
  //   this.state.client.auth
  //     .loginWithCredential(
  //       new AnonymousCredential()
  //     )
  //     .then(user => {
  //       console.log(
  //         `Successfully logged in as user ${
  //           user.id
  //         }`
  //       );
  //       this.setState({ currentUserId: user.id });
  //     })
  //     .catch(err => {
  //       console.log(
  //         `Failed to log in anonymously: ${err}`
  //       );
  //       this.setState({
  //         currentUserId: undefined,
  //       });
  //     });
  // }

  // _onPressLogout() {
  //   this.state.client.auth
  //     .logout()
  //     .then(user => {
  //       console.log(`Successfully logged out`);
  //       this.setState({
  //         currentUserId: undefined,
  //       });
  //     })
  //     .catch(err => {
  //       console.log(`Failed to log out: ${err}`);
  //       this.setState({
  //         currentUserId: undefined,
  //       });
  //     });
  // }
=======
>>>>>>> blue-version
}
