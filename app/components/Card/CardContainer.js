import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CardList from './CardList';

const CardContainer = () => {
    return (
        <View style={styles.container}>
            <CardList/>
            <View style={{ height: 2, backgroundColor: '#cccccc', marginTop: 0 }}/>
            <View style={{ alignSelf: 'center', margin: 5}}>
                <Text style={{ color: '#c4c4c4', fontWeight: '600'}}> Transaction History </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5F5',
        flex: 0.92,
        flexDirection: 'column',
    }
});

export default CardContainer;
