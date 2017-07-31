import React, { Component } from 'react';
import {
  View, Text, TouchableOpacity,
  StyleSheet, Dimensions, Image
} from 'react-native';

import SignInJSX from './SignIn.js';
import SignUpJSX from './SignUp.js';

import icLogo from '../../media/appIcon/ic_logo.png';
import icBack from '../../media/appIcon/back_white.png';

const { height, width } = Dimensions.get('window');

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true
    };
  }

  goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
  }

  signIn() {
    this.setState({ isSignIn: true });
  }

  signUp() {
    this.setState({ isSignIn: false });
  }

  render() {
    const { wrapper, row, icon, title,
      controlWrapper, btnSignIn, btnSignUp,
      activeStyle, inactiveStyle } = styles;
    const { isSignIn } = this.state;
    const inputJSX = isSignIn ? (<SignInJSX />) : (<SignUpJSX />);
    return (
      <View style={wrapper}>
        <View style={row}>
          <TouchableOpacity onPress={this.goBackToMain.bind(this)} >
            <Image source={icBack} style={icon} />
          </TouchableOpacity>
          <Text style={title}>Wearing a Dress</Text>
          <Image source={icLogo} style={icon} />
        </View>
        { inputJSX }
        <View style={{ alignItems: 'center' }}>
          <View style={controlWrapper}>
            <TouchableOpacity style={btnSignIn} onPress={this.signIn.bind(this)}>
              <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={btnSignUp} onPress={this.signUp.bind(this)}>
              <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Authentication;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#35a05e',
    padding: height / 35,
    justifyContent: 'space-between'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    height: height / 25,
    width: height / 25
  },
  title: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: height / 35
  },
  controlWrapper: {
    flexDirection: 'row',
    width: width / 1.5
  },
  btnSignIn: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: height / 50,
    borderTopLeftRadius: height / 25,
    borderBottomLeftRadius: height / 25,
    marginRight: width / 300
  },
  btnSignUp: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: height / 50,
    borderTopRightRadius: height / 25,
    borderBottomRightRadius: height / 25,
    marginLeft: width / 300
  },
  activeStyle: {
    color: '#35a05e'
  },
  inactiveStyle: {
    color: '#D7D7D7'
  },
});
