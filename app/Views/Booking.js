import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

const Booking = ({ activeRoute, login }) => (
  <ScrollView contentContainerStyle={styles.view}>
    <Text style={styles.header1}>{activeRoute.name}</Text>
    <Text style={styles.header1}>{login}</Text>
    <Text style={styles.text}>Welcome! Here you can book your next trip!!</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    padding: 20,
  },
  header1: {
    fontSize: 24,
    marginBottom: '20%',
  },
  text: {
    fontSize: 20,
    width: '70%',
    textAlign: 'center',
    lineHeight: 30,
    marginBottom: '20%',
  },
});

const mapStateToProps = state => ({
  activeRoute: state.routes.activeRoute,
  login: state.routes.login,
});

export default connect(
  mapStateToProps,
)(Booking);
