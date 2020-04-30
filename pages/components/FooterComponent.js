import React from 'react';
import {StyleSheet, View, Text, Alert, TouchableOpacity} from 'react-native';

function FooterComponent() {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => Alert.alert('button is pressed')}>
        <Text style={styles.footerText}>admin portal</Text>
      </TouchableOpacity>
      <View style={styles.buttonsInLine}>
        <TouchableOpacity onPress={toContact}>
          <Text style={styles.footerText}>contact us</Text>
        </TouchableOpacity>
        <Text> | </Text>
        <TouchableOpacity onPress={toFeedback}>
          <Text style={styles.footerText}>Feedback</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function toContact() {
  Alert.alert('navigate to contact page');
}

function toFeedback() {
  Alert.alert('navigate to feedback page');
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },

  footerText: {
    color: '#649cf5',
  },

  buttonsInLine: {
    flexDirection: 'row',
  },
});

export default FooterComponent;
