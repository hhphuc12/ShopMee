import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

class LogOutJSX extends Component {
    gotoAuthentication = () => {
        const { navigator } = this.props;
        navigator.push({ name: 'AUTHENTICATION' });
    }

    render() {
        const { btnText, button } = styles;
        return (
            <View>
                <TouchableOpacity style={button} onPress={this.gotoAuthentication.bind(this)}>
                    <Text style={btnText}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default LogOutJSX;

const styles = StyleSheet.create({
    button: {
        height: height / 16,
        backgroundColor: 'white',
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: height / 100
    },
    btnText: {
        fontSize: height / 40,
        fontFamily: 'Avenir',
        color: '#34B089'
    }
});
