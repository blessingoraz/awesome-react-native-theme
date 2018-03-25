import React from 'react';
import { StyleSheet, View } from 'react-native';
import TransactionList from './TransactionList';

const TransactionContainer = () => {
    return (
        <View style={styles.container}>
            <TransactionList/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 2,
    }
});

export default TransactionContainer;
