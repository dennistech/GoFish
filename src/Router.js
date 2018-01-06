import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import SignUpLogin from './components/auth/SignUpLogin';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene
          initial
          onRight={() => {}}
          rightTitle="SKIP"
          key="signUpLogin"
          component={SignUpLogin}
          navTransparent="true"
          rightButtonTextStyle={{ color: '#fff' }}
        />
        <Scene
          key="LogIn"
          component={LogIn}
          title="LOG IN"
          navigationBarStyle={{ backgroundColor: '#007fff' }}
          titleStyle={{ color: 'white' }}
        />
        <Scene
          key="SignUp"
          component={SignUp}
          title="SIGN UP"
          navigationBarStyle={{ backgroundColor: '#007fff' }}
          titleStyle={{ color: 'white' }}
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
