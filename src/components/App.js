import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import Authentication from './authentication/Authentication';
import ChangeInfo from './change-info/ChangeInfo';
import Main from './main/Main';
import OrderHistory from './order-history/OrderHistory';

export default class App extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ name: 'MAIN' }}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
            case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
            case 'ORDER_HISTORY': return <OrderHistory navigator={navigator} />;
            default: return <Main navigator={navigator} />;
          }
        }}
        
        configureScene={route => {
          if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
      />
    );
  }
}
