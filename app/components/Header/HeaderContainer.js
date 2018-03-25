import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
    return (
        <View style={styles.container}>
            <HeaderTitle/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#27227C',
        flex: 1,
        flexDirection: 'column',
    }
});

export default HeaderContainer;
