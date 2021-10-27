import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
    return (
    <View style={styles.container}>
        <Text style={styles.text} >Nova Home</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5e4d85'
    },
    text: {
        fontSize: 36,
        fontWeight: 'bold'
    }
})