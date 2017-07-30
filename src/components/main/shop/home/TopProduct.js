import React, { Component } from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';

const { height, width } = Dimensions.get('window');

class Collection extends Component {
    render() {
        const { wrapper, title, titleWrapper, body,
            product, image, productName, productPrice
        } = styles;
        return (
            <View style={wrapper}>
                <View style={titleWrapper}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <View style={product}>
                        <Image style={image} source={sp1} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>$400</Text>
                    </View>
                    <View style={product}>
                        <Image style={image} source={sp2} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>$250</Text>
                    </View>
                    <View style={{ height: height / 40, width }} />
                    <View style={product}>
                        <Image style={image} source={sp3} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>$400</Text>
                    </View>
                    <View style={product}>
                        <Image style={image} source={sp4} />
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>$250</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default Collection;

const imgWidth = (width - (width / 10)) / 2;
const imgHeight = (imgWidth / 361) * 452;
const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        margin: height / 100,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5
    },
    title: {
        fontSize: height / 35,
        color: '#AFAEAF'
    },
    titleWrapper: {
        padding: height / 100,
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: height / 40
    },
    product: {
        width: imgWidth,
        backgroundColor: 'white',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 5,
        paddingBottom: height / 80
    },
    image: {
        width: imgWidth,
        height: imgHeight
    },
    productName: {
        paddingLeft: height / 50,
        fontFamily: 'Avenir',
        color: '#AFAEAF',
        paddingTop: height / 80
    },
    productPrice: {
        color: '#662F90',
        paddingLeft: height / 50,
        fontFamily: 'Avenir'
    }
});
