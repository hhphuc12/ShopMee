import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './home/Home';
import Contact from './contact/Contact';
import Search from './search/Search';
import Cart from './cart/Cart';
import Header from './Header';

import icHomeS from '../../../media/appIcon/home.png';
import icHome from '../../../media/appIcon/home0.png';
import icCartS from '../../../media/appIcon/cart.png';
import icCart from '../../../media/appIcon/cart0.png';
import icSearchS from '../../../media/appIcon/search.png';
import icSearch from '../../../media/appIcon/search0.png';
import icContactS from '../../../media/appIcon/contact.png';
import icContact from '../../../media/appIcon/contact0.png';

const { height } = Dimensions.get('window');

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home'
        };
    }

    render() {
        const { iconTab } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header open={this.props.open} />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'home' })}
                        renderIcon={() => <Image source={icHome} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icHomeS} style={iconTab} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({ selectedTab: 'cart' })}
                        renderIcon={() => <Image source={icCart} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icCartS} style={iconTab} />}
                        badgeText="2"
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Cart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({ selectedTab: 'search' })}
                        renderIcon={() => <Image source={icSearch} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icSearchS} style={iconTab} />}
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Search />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({ selectedTab: 'contact' })}
                        renderIcon={() => <Image source={icContact} style={iconTab} />}
                        renderSelectedIcon={() => <Image source={icContactS} style={iconTab} />}
                        badgeText="1"
                        selectedTitleStyle={{ color: '#34B089' }}
                    >
                        <Contact />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

export default Shop;

const styles = StyleSheet.create({
    iconTab: { height: height / 25, width: height / 25 }
});
