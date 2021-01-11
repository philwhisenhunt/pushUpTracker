import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default class LoginScreen extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Text will go here.</Text>
            </View>
        )
    }
}
state={
    email: "",
    password:""
}

<View style={styles.inputView} >

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',

    },
});