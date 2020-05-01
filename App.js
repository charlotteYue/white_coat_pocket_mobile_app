/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ClientHome from './pages/clientHome.js';
import AdminHome from './pages/adminHome';
// import ClientResources from './pages/clientResources.js';
// import ClientServices from './pages/clientServices.js';


const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ClientHome"
          component={ClientHome}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
        name="AdminHome" 
        component={AdminHome} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
