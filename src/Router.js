import React from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import SignUpLogin from './components/auth/SignUpLogin';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: '#007fff',
  },
  titleStyle: {
    color: 'white',
  },
});
const commonSceneStyles = {
  navigationBarStyle: styles.navigationBarStyle,
  titleStyle: styles.titleStyle,
  navBarButtonColor: 'white',
};
const scenesConfig = [
  {
    key: 'singUpLogin',
    component: SignUpLogin,
    initial: true,
    onRight: () => {},
    rightTitle: 'SKIP',
    navTransparent: true,
    rightButtonTextStyle: { color: 'white' },
  },
  {
    key: 'signUp',
    component: SignUp,
    title: 'SIGN UP',
    ...commonSceneStyles,
  },
  {
    key: 'logIn',
    component: LogIn,
    title: 'LOG IN',
    ...commonSceneStyles,
  },
];
const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        {scenesConfig.map(scene => (
          <Scene {...scene} />
        ))}
      </Scene>
    </Router>
  );
};

export default RouterComponent;
