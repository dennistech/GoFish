import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const AppBackgroundView = ({ children, style }) => {
  return (
    <LinearGradient colors={['#007fff', 'black']} style={style}>
      {children}
    </LinearGradient>
  );
};

export { AppBackgroundView };
