import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import banner from '../../../../media/temp/banner.jpg';

const { height, width } = Dimensions.get('window');

class Collection extends Component {
    render() {
        const { wrapper, wrapperText, wrapperImg, textStyle, imgStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={wrapperText}>
                    <Text style={textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={wrapperImg}>
                    <Image source={banner} style={imgStyle} />
                </View>
            </View>
        );
    }
}

export default Collection;

const imgWidth = width - (height / 25);
const imgHeight = (imgWidth / 933) * 465;
const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.365,
        backgroundColor: 'white',
        margin: height / 100,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5,
        paddingLeft: height / 100,
        paddingRight: height / 100
    },
    wrapperText: {
        flex: 1,
        justifyContent: 'center'
    },
    wrapperImg: {
        flex: 6
    },
    textStyle: {
        fontSize: height / 35,
        color: '#AFAEAF'
    },
    imgStyle: {
        height: imgHeight,
        width: imgWidth
    }
});
