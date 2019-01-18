import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Linking,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progressStatus : true,
      mybetresult: [],
    }

    _isMounted = false;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.view}>
        <Text style={styles.h1}>About</Text>
        <Text style={[styles.text, styles.p]}>This is the first version of Cebuboss Betting App.
        </Text>
        <Text style={[styles.text, styles.p]}>You can use this app for picking lucky number 
          and check the result of your bet.</Text>
        <Text style={styles.h1}>How to Play</Text>
        <Text style={[styles.text, styles.p]}>Thank you for using our app.</Text>
        <Text style={styles.signature}>Cebuboss Company</Text>
        <Text style={styles.position}>Support Developer at company</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  view: {
    marginTop: 20,
    padding: 20
  },
  h1: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10
  },
  p: {
    textAlign: 'left',
    marginBottom: 20
  },
  linkCredits: {
    fontStyle: 'italic',
    color: '#2962FF'
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  signature: {
    fontSize: 16,
    marginBottom: 4,
  },
  position: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#2962FF'
  }
});

export default About;
