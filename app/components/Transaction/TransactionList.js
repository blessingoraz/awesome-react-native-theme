import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import dummyTransactionData from '../../dummyTransactionData';

class TransactionList extends Component {
    _keyExtractor = (item, index) => item.id;

    renderRow = (rowData) => {
        return (
            <View style={styles.cardContainer}>
                <View style={{ backgroundColor: '#27227C', height: 40, width: 40, borderRadius: 20, justifyContent: 'center'}}>
                    <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: '700'}}>{rowData.item.name[0]}</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 5}}>
                    <Text style={{fontSize: 14, fontWeight: '800', opacity: 0.9}}>{rowData.item.name}</Text>
                    <Text style={{fontSize: 11, fontWeight: '600', color: '#c4c4c4'}}>{rowData.item.description}</Text>
                </View>
                <View style={{marginLeft: 70}}>
                    <Text style={{fontSize: 14, fontWeight: '800', opacity: 0.9}}>{rowData.item.amount}</Text>
                    <Text style={{fontSize: 11, fontWeight: '600', color: '#c4c4c4'}}>{rowData.item.date}</Text>
                </View>
            </View>
        )
    }

    render () {
        return (
            <FlatList
                contentContainerStyle={styles.cardList}
                data={dummyTransactionData}
                keyExtractor={(item, index) => index}
                renderItem={this.renderRow}
            />
        )
    }
}

const styles = StyleSheet.create({
    cardList: {
        flex:1,
    },
    cardContainer: {
        height: 65,
        backgroundColor: '#fff',
        marginTop: 15,
        paddingLeft: 12,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default TransactionList;
