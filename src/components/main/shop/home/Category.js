import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

import little from '../../../../media/temp/little.jpg';
import maxi from '../../../../media/temp/maxi.jpg';
import party from '../../../../media/temp/party.jpg';

const { height, width } = Dimensions.get('window');

class Category extends Component {
    render() {
        const { wrapper, wrapperText, wrapperImg, textStyle, imgStyle, imgDes } = styles;
        return (
            <View style={wrapper}>
                <View style={wrapperText}>
                    <Text style={textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={wrapperImg}>
                    <Swiper showsPanigation width={imgWidth} height={imgHeight}>
                        <Image source={little} style={imgStyle}>
                            <Text style={imgDes}>Little Dress</Text>
                        </Image>
                        <Image source={maxi} style={imgStyle}>
                            <Text style={imgDes}>Maxi Dress</Text>
                        </Image>
                        <Image source={party} style={imgStyle}>
                            <Text style={imgDes}>Party Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}

export default Category;

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
        width: imgWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgDes: {
        fontSize: height / 40,
        color: '#9A9A9A',
        fontFamily: 'Avenir'
    }
});
