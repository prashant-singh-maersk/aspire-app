import React from 'react';
import logo from 'icons/only_logo.svg';
const SplashScreen: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'var(--secondary-default)',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <img src={logo} alt="logo" width="40" height="40" />
      </div>
    </div>
  );
};

export default SplashScreen;
