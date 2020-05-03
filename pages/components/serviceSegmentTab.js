import SegmentedControlTab from 'react-native-segmented-control-tab';
import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ServiceSegmentedControlTab extends Component {
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
      <View style={styles.container}>
        <SegmentedControlTab
          values={['Home', this.props.categoryName, this.props.serviceName]}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          activeTabStyle= {styles.tab}
          tabTextStyle={styles.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    height: 50,
    width: "100%",
    paddingTop: 10,
  },
  tab: {
    backgroundColor: "#00695C",
  },
  text: {
    color:"#004D40",
  }
})

export default ServiceSegmentedControlTab;
