import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity,
    Image, TextInput, StyleSheet } from 'react-native';

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';

const { height } = Dimensions.get('window');

class Header extends Component {
    openMenu = () => {
        const { open } = this.props;
        open();
    }

    render() {
        const { wrapper, row, textInput, icon, title } = styles;
        return (
            <View style={wrapper}>
                <View style={row}>
                    <TouchableOpacity onPress={this.openMenu.bind(this)} >
                        <Image source={icMenu} style={icon} />
                    </TouchableOpacity>
                    <Text style={title}>Wearing a Dress</Text>
                    <Image source={icLogo} style={icon} />
                </View>
                <TextInput
                    style={textInput}
                    placeholder='What do you want to buy?'
                    underlineColorAndroid='white'
                />
            </View>
        );
    }
}

export default Header;

/* <TouchableOpacity onPress={this.openMenu.bind(this)}>
    <Text style={{ height: height / 8 }}>TopBar</Text>
</TouchableOpacity> */

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34B089',
        padding: height / 100
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 20,
        backgroundColor: '#FFF',
        marginTop: height / 100,
        padding: height / 100
    },
    icon: {
        height: height / 25,
        width: height / 25
    },
    title: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: height / 40
    }
});
