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
  View,
  Image
} from 'react-native';
import Header from './components/Header/HeaderContainer';
import Card from './components/Card/CardContainer';
import Transaction from './components/Transaction/TransactionContainer';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageStyle} >
          <Image source={require('./components/images/atm.jpg')} style={{
            // flex: 1,
            resizeMode: 'center',
          }}/>
        </View>
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
  },
  imageStyle: {
    backgroundColor: 'red',
    position: 'absolute',
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100%',
  }
});
