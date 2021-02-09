import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../header/header';


export default function App() {
  return (
    <>
      
      <Router>
        <Header />
        <Switch>
          {/* <Route exact path="/" component={AllCharacters} />
          <Route path="/characters/:id" component={CharactersById} /> */}
        </Switch>
      </Router>
    </>
  );
}
