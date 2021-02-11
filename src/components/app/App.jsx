import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterById from '../containers/CharacterById';
import Header from '../header/Header';
import { ThemeProvider } from '../state/themeContext';
import './App.css';


export default function App() { 
  
  return (
    <div>
      <Router>
        <ThemeProvider>
          <Header />
          <Switch>
            <Route exact path="/" component={AllCharacters} />;
            <Route path="/characters/:id" component={CharacterById} />
          </Switch>
        </ThemeProvider>
      </Router>
    </div>
  );
}
