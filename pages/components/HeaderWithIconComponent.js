import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from 'native-base';
import {StyleSheet} from 'react-native';

class HeaderwithIcon extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent>
              <Icon style={{color: 'white'}} name="arrow-back" />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Title style={styles.headerText}>White Coat Pocket Guide</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon style={{color: 'white'}} name="home" />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#0a5cd1',
    // width: '10',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HeaderwithIcon;
