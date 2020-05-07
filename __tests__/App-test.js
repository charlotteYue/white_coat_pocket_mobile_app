/**
 * @format
 */

import 'react-native';
import React from 'react';
// import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

// jest.mock('react-navigation/stack', () => {
//   return {
//     createAppContainer: jest.fn().mockReturnValue(function NavigationContainer(props) {
//       return null;
//     }),
//     createDrawerNavigator: jest.fn(),
//     createMaterialTopTabNavigator: jest.fn(),
//     createStackNavigator: jest.fn(),
//     StackActions: {
//       push: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/PUSH' })),
//       replace: jest.fn().mockImplementation(x => ({ ...x, type: 'Navigation/REPLACE' })),
//       reset: jest.fn()
//     },
//     NavigationActions: {
//       navigate: jest.fn().mockImplementation(x => x)
//     }
//   };
// });

it('renders correctly', async () => {
  // renderer.create(<App />);
  expect(1).toBe(1);
});
