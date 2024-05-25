import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import AppLayout from 'components/layout';
import Home from 'pages/home';
import Cards from 'pages/cards';
import Payments from 'pages/payments';
import Credit from 'pages/credits';
import Settings from 'pages/settings';
import logo from "icons/only_logo.svg";
import { INITIAL_CARDS } from 'core/constants';

import './App.css';

const App: React.FC = () => {
  const [loader, setLoader] = useState(false);

  // for mock purpose...
  // to have some initial cards on app load, add mock cards data to local storage
  useEffect(() => {
    setLoader(true);
    if (!localStorage.getItem('mockData')) {
      localStorage.setItem('mockData', JSON.stringify(INITIAL_CARDS));
    }
    setTimeout(() => {
      // in case of 404 there is a lag in reading the mockData, so, explicitly adding 1 sec buffer.
      if (!localStorage.getItem('mockData')) {
        localStorage.setItem('mockData', JSON.stringify(INITIAL_CARDS));
      }
      setLoader(false);
    }, 1000);
  }, []);

  if (loader) {
    return (
      <div
        style={{
          position: 'fixed',
          backgroundColor:'var(--secondary-default)',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      >
       <div style={{
         display:'flex',
         justifyContent: 'center',
         alignItems: 'center',
         height:"100%",
       }}>
         <img src={logo} alt="logo" width="40" height="40"/>
       </div>
      </div>
    );
  }

  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path={'/'} element={<Navigate to="/cards" replace />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/cards'} element={<Cards />} />
          <Route path={'/payments'} element={<Payments />} />
          <Route path={'/credit'} element={<Credit />} />
          <Route path={'/settings'} element={<Settings />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
