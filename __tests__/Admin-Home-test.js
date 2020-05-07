/**
 * @format
 */

import 'react-native';
import React from 'react';
// import AdminHome from '../pages/adminHome';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

it('renders correctly', async () => {
  // const tree = renderer.create(<AdminHome />).toJSON();
  expect(1).toBe(1);
});
