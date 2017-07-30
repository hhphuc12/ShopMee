import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

class SignInJSX extends Component {
    gotoChangeInfo = () => {
        const { navigator } = this.props;
        navigator.push({ name: 'CHANGE_INFO' });
    }

    gotoOrderHistory = () => {
        const { navigator } = this.props;
        navigator.push({ name: 'ORDER_HISTORY' });
    }

    render() {
        const { btnText, button, wrapper, username } = styles;
        return (
            <View style={wrapper}>
                <Text style={username}>Vu Tran Bich Du</Text>
                <View>
                    <TouchableOpacity style={button} onPress={this.gotoOrderHistory.bind(this)}>
                        <Text style={btnText}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button} onPress={this.gotoChangeInfo.bind(this)}>
                        <Text style={btnText}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button}>
                        <Text style={btnText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>
        );
    }
}

export default SignInJSX;

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    button: {
        height: height / 16,
        backgroundColor: 'white',
        width: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: height / 100,
        marginVertical: height / 200
    },
    btnText: {
        fontSize: height / 40,
        fontFamily: 'Avenir',
        color: '#34B089'
    },
    username: {
        color: 'white',
        fontSize: height / 40,
        fontFamily: 'Avenir'
    }
});
