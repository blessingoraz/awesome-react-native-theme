import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderTitle = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Icon name="bars" size={20} color="#ffffff" />
                </View>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>HOME</Text>
                </View>
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceText}>Current Balance</Text>
                <Text style={styles.balanceAmount}>$20,000.00</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 30,
    },
    headerTitle: {
        color: '#ffffff',
        fontWeight: '700',
        opacity: 0.9
    },
    headerTitleContainer: {
        flex: 1.3,
    },
    icon: {
        flex: 1,
        marginLeft: 10
    },
    balanceContainer: {
        marginLeft: 10,
        marginTop: 20
    },
    balanceText: {
        color: '#dddddd',
        letterSpacing: 1,
        fontSize: 15
    },
    balanceAmount: {
        color: '#eeeeee',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 5
    },
    buttonContainer: {
        height: 22,
        backgroundColor: '#ffffff',
        width: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10
    },
    buttonText: {
        color: '#27227C',
        fontWeight: '800',
        opacity: 0.9
    }
});

export default HeaderTitle;
