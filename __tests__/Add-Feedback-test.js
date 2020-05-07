import 'react-native';
import React from 'react';
import Feedback from '../pages/feedback';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

it('renders add feedback component correctly', async () => {
  const tree = renderer.create(<Feedback />).toJSON();
  expect(tree).toMatchSnapshot();
});