import React, { Component } from 'react';
import Drawer from 'react-native-drawer';

import Menu from './menu/Menu';
import Shop from './shop/Shop';

export default class Main extends Component {

  closeControlPanel = () => {
    this.drawer.close();
  };

  openControlPanel = () => {
    this.drawer.open();
  };

  render() {
    const { navigator } = this.props;
    return (
      <Drawer
        type='overlay'
        tweenHandler={ratio => ({
          main: {
            opacity: 1,
          },
          mainOverlay: {
            opacity: ratio / 2,
            backgroundColor: 'black',
          },
        })}
        ref={(ref) => { this.drawer = ref; }}
        content={<Menu navigator={navigator} />}
        openDrawerOffset={0.4}
        tapToClose
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
