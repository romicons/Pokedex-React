import React from "react";
import "./styles.css";

import Navbar from './components/Navbar.js';
import Searchbar from './components/Searchbar.js';
import Pokedex from './components/Pokedex.js';
import {getPokemonData, getPokemons} from './api.js';
import {FavouriteProvider} from "./context/favouriteContext.js";

const {useState, useEffect} = React;

export default function App () {
  const [pokemons, setPokemons] = useState ([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(24, 24 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
        });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 24));
    } catch (err){}
  };

  useEffect (() => {
    fetchPokemons();
  }, 
  [page]);

  const updateFavouritePokemons = (name) => {
    console.log(name);
  }
  return (
    <FavouriteProvider 
    value={{
      favouritePokemons: favourites, 
      updateFavouritesPokemons: updateFavouritePokemons
    }} 
    >
    <div>
      <Navbar />
      <div className="App">
        <Searchbar />
        <Pokedex 
         loading={loading}
          pokemons={pokemons}
          page={page}
          setPage={setPage}
          total={total}
        />
      </div>
    </div>
    </FavouriteProvider>
  );
};