/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './components/Header/HeaderContainer';
import Card from './components/Card/CardContainer';
import Transaction from './components/Transaction/TransactionContainer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Header/>
          <Card/>
          <Transaction/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  }
});
