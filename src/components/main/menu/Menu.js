import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

import LogOutJSX from './LogOutJSX';
import SignInJSX from './SignInJSX';

import profile from '../../../media/temp/profile.png';

const { width, height } = Dimensions.get('window');

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logedIn: false
        };
    }

    render() {
        const { navigator } = this.props;
        const { wrapper, profileStyle } = styles;
        const SignIn = (<SignInJSX navigator={navigator} />);
        const LogOut = (<LogOutJSX navigator={navigator} />);
        const showJSX = this.state.logedIn ? SignIn : LogOut;
        return (
            <View style={wrapper}>
                <Image source={profile} style={profileStyle} />
                { showJSX }
            </View>
        );
    }
}

export default Menu;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#34B089',
        alignItems: 'center'
    },
    profileStyle: {
        width: width / 4,
        height: width / 4,
        borderRadius: width / 8,
        marginVertical: height / 30
    }
});
