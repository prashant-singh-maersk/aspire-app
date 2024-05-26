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

import { INITIAL_CARDS } from 'core/constants';

import './App.css';
import SplashScreen from 'components/splash-screen';

const App: React.FC = () => {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    if (!localStorage.getItem('mockData')) {
      localStorage.setItem('mockData', JSON.stringify(INITIAL_CARDS));
    }
    setTimeout(() => {
      if (!localStorage.getItem('mockData')) {
        localStorage.setItem('mockData', JSON.stringify(INITIAL_CARDS));
      }
      setLoader(false);
    }, 1000);
  }, []);

  if (loader) {
    return <SplashScreen/>;
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
