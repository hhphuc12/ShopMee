import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet, TextInput } from 'react-native';

const { height } = Dimensions.get('window');

class SignInJSX extends Component {
    render() {
        const { textInput, btnInput } = styles;
        return (
            <View>
                <TextInput
                    style={textInput}
                    placeholder='Enter your email'
                    underlineColorAndroid='white'
                />
                <TextInput
                    style={textInput}
                    placeholder='Enter your password'
                    underlineColorAndroid='white'
                />
                <TouchableOpacity style={btnInput}>
                    <Text style={{ color: 'white' }}>SIGN IN NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default SignInJSX;

const styles = StyleSheet.create({
    textInput: {
        height: height / 15,
        backgroundColor: '#FFF',
        marginTop: height / 100,
        paddingLeft: height / 30,
        fontSize: height / 40,
        borderRadius: height / 7.5
    },
    btnInput: {
        height: height / 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginTop: height / 100,
        borderRadius: height / 7.5
    }
});
