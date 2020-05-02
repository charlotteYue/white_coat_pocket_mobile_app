import SegmentedControlTab from 'react-native-segmented-control-tab';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class CustomSegmentedControlTab extends Component {
  constructor(props) {
    super(props);
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
          values={['Home', this.props.categoryName]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
        />
      </View>
    );
  }
}

export default CustomSegmentedControlTab;
