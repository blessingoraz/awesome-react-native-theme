import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import dummyCardData from '../../dummyCardData';

export default class CardList extends Component {

    _keyExtractor = (item, index) => item.id;

    renderRow = (rowData) => {
        return (
            <View style={styles.cardContainer}>
                <Text style={{color: 'white', opacity: 0.9, fontWeight: '500'}}>{rowData.item.type}</Text>
                <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>{rowData.item.amount}</Text>
            </View>
        )
    }

    render() {
        return(
            <FlatList
                contentContainerStyle={styles.cardList}
                data={dummyCardData}
                keyExtractor={(item, index) => index}
                renderItem={this.renderRow}
                horizontal={true}
            />
        )
    };
};

const styles = StyleSheet.create({
    cardList: {
        flex:1,
    },
    cardContainer: {
        height: 100,
        width: 150,
        backgroundColor: '#DE7B62',
        justifyContent: 'center',
        marginTop: 15,
        paddingLeft: 12,
        marginLeft: 10,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    }
});
