import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, AppBackgroundView } from '../common';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  containerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  containerButtons: {
    height: 50,
    marginBottom: 25,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  signUpButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  loginButton: {
    flex: 1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 5,
  },
});

class SignUpLogin extends Component {
  render() {
    return (
      <AppBackgroundView style={styles.container}>
        <View style={styles.containerContent}>
          <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>GO FISH</Text>
        </View>
        <View style={styles.containerButtons}>
          <View style={styles.signUpButton}>
            <Button
              backgroundColor="#007fff"
              fontColor="black"
              onPress={() => Actions.signUp()}
            >
              SIGN UP
            </Button>
          </View>
          <View style={styles.loginButton}>
            <Button
              backgroundColor="transparent"
              fontColor="#007fff"
              onPress={() => Actions.logIn()}
            >
              LOG IN
            </Button>
          </View>
        </View>
      </AppBackgroundView>
    );
  }
}

export default SignUpLogin;
