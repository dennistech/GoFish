import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../../actions';
import { Button, AppBackgroundView } from '../common';
import Input from './Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'black',
  },
  facebookButtonContainer: {
    height: 100,
    justifyContent: 'center',
    backgroundColor: 'navy',
  },
  facebookButtonStyle: {
    marginHorizontal: 25,
    height: 50,
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,
  },
  loginButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
  loginButtonStyle: {
    marginHorizontal: 20,
    height: 50,
  },
});

class LogIn extends Component {
  constructor() {
    super();

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }
  onEmailChange(text) {
    this.setState({ email: text });
  }
  onPasswordChange(text) {
    this.setState({ password: text });
  }
  render() {
    return (
      <AppBackgroundView style={styles.container}>
        <View style={styles.facebookButtonContainer}>
          <View style={styles.facebookButtonStyle}>
            <Button backgroundColor="#007fff" fontColor="white">
              LOG IN WITH FACEBOOK
            </Button>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="EMAIL"
            placeholder="HELLO@WOLRD.COM"
            value={this.state.email}
            onChangeText={this.onEmailChange}
          />
          <Input
            secureTextEntry
            label="PASSWORD"
            placeholder="********"
            value={this.state.password}
            onChangeText={this.onPasswordChange}
          />
        </View>
        <View style={styles.loginButtonContainer}>
          <View style={styles.loginButtonStyle}>
            <Button backgroundColor="#007fff" fontColor="white">
              LOG IN WITH EMAIL
            </Button>
          </View>
        </View>
      </AppBackgroundView>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return { email, password };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LogIn);
