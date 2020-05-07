import React, {Component} from 'react';
import {
  // Container,
  // Header,
  // Left,
  // Body,
  // Right,
  Button,
  Icon,
  // Title,
} from 'native-base';
import {StyleSheet, View, Text} from 'react-native';

class HeaderWithIcon extends Component {
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.left}
        accessible={true}
        accessibilityLabel="Go back"
        accessibilityHint="Navigates to the previous screen">
          <Button transparent style={styles.left}>
            <Icon style={{color: 'white'}} name="arrow-back" 
            onPress={() => this.props.navigation.navigate(this.props.back)}/>
          </Button>
        </View>
        <View style={styles.center}>
          <Text style={styles.headerText}>White Coat Pocket Guide</Text>
        </View>
        <View style={styles.right}
        accessible={true}
        accessibilityLabel="Go home"
        accessibilityHint="Navigates to the home screen"
        accessibilityRole={'button'}>
          <Button transparent style={styles.right}>
            <Icon style={{color: 'white'}} name="home" 
            onPress={() => this.props.navigation.navigate(this.props.home)}/>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    flex: 1,
    left: 0,
  },
  center: {
    justifyContent: 'space-between',
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  header: {
    backgroundColor: '#1565C0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderWithIcon;
