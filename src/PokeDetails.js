import React, {Component} from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './PokeDetails.css'
// import { BrowserRouter, Route, Link } from 'react-router-dom';

class PokeDetails extends Component {

  render(){
    const { id } = this.props.match.params;
    const pokemon = pokemons.find((item) => (
      item.id === parseInt(id)
    ))
    return(
      <div>
        <h2>{pokemon.name} Details</h2>
        <div className="pokedex">
          <Pokemon pokemon={pokemon} />
        </div>
        <h2> Summary </h2>
        <p>{pokemon.summary}</p>
        <h2>Game locations of {pokemon.name}</h2>
          {pokemon.foundAt.map((local) => (
            <div className="detailMap">
            <h3>{local.location}</h3>
            <img src={local.map} alt={`${pokemon.name} local`}/>
            </div>
          ))}




        
      </div>
    )}
}

export default PokeDetails
