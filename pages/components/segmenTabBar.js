import SegmentedControlTab from 'react-native-segmented-control-tab';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class CustomSegmentedControlTab extends Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  render() {
    return (
      <View>
        <SegmentedControlTab
          values={['All Categories', 'Healthcare Services']}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
      </View>
    );
  }
}

export default CustomSegmentedControlTab;
