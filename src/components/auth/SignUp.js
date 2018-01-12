import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { nameChanged, emailChanged, passwordChanged } from '../../actions';
import { Button, AppBackgroundView } from '../common';
import Input from './Input';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
  signUpButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
  signUpButtonStyle: {
    marginHorizontal: 20,
    height: 50,
  },
  ToSContainer: {
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: 'transparent',
  },
  ToSTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  ToSLinkStyle: {
    color: '#007fff',
  },
});

class SignUp extends Component {
  constructor() {
    super();

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }
  onNameChange(text) {
    this.setState({ name: text });
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
              SIGN UP WITH FACEBOOK
            </Button>
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Input
            label="NAME"
            placeholder="JOHN DOE"
            value={this.state.name}
            onChangeText={this.onNameChange}
          />
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
        <View style={styles.signUpButtonContainer}>
          <View style={styles.signUpButtonStyle}>
            <Button backgroundColor="#007fff" fontColor="white">
              SIGN UP WITH EMAIL
            </Button>
          </View>
          <View style={styles.ToSContainer}>
            <Text style={styles.ToSTextStyle}>
              By creating an account, you agree to our{'\n'}
              <Text style={styles.ToSLinkStyle}>Terms of Service </Text>
              &
              <Text style={styles.ToSLinkStyle}> Privacy Policy</Text>
            </Text>
          </View>
        </View>
      </AppBackgroundView>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { name, email, password } = auth;

  return { name, email, password };
};

export default connect(mapStateToProps, {
  nameChanged, emailChanged, passwordChanged,
})(SignUp);
