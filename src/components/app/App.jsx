import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import AllCharacters from '../containers/AllCharacters';
import CharacterById from '../containers/CharacterById';
import Header from '../header/header';


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={AllCharacters} />;
          <Route path="/characters/:id" component={CharacterById} />
        </Switch>
      </Router>
    </>
  );
}
