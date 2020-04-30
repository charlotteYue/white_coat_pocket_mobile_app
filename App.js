/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import ClientHome from './pages/clientHome.js';
// import AdminHome from './pages/adminHome';
import ClientResources from './pages/clientResources.js';
import ClientServices from './pages/clientServices.js';

const App: () => React$Node = () => {
  return (
    <>
      <ClientResources />
    </>
  );
};

export default App;
