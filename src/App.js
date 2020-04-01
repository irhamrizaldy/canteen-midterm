import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Dashboard } from './components/Dashboard';
import { About } from './components/About';
import { Navigation } from './components/Navigation';

const FadeIn = styled.div`animation: 5s ${keyframes`${fadeIn}`} infinite`;

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <code><FadeIn><h5 className="m-3 d-flex justify-content-center" style={{ marginTop: '25px', fontSize: '50px' }}>- Kantin Polinema -</h5></FadeIn></code>
        <Navigation />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} exact />
          <Route path='/dashboard' component={Dashboard} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
