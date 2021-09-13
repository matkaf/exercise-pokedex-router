import NotFound from './NotFound';
import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';
import About from './About';
import './App.css';
import pokemons from './data';
import PokeDetails from './PokeDetails';
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <img src="https://pokedex.sleduardo.dev/img/logo.svg" alt="Pokedex" height="150px" />
      {/* <h1> Pokedex </h1> */}
      <BrowserRouter>
      <nav>
        <Link to="/">Pokedex</Link>
        <Link to="/about">About</Link>
      </nav>
        <Switch>
          <Route path="/pokemon/:id" render={(props) => <PokeDetails  { ...props } /> } />
          <Route path="/about" component={About} />
          <Route exact path="/" render={ () => <Pokedex pokemons={pokemons} /> } />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;