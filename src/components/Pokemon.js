import React, { useContext } from 'react';
import FavouriteContext from '../context/favouriteContext';

const Pokemon = (props) => {
    const {pokemon} = props;
    const {favouritePokemons, updateFavouritePokemons} = useContext(FavouriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favouritePokemons.includes(pokemon.name) ? redHeart : blackHeart;
    const clickHeart = (e) => {
        e.preventDefault();
        updateFavouritePokemons(pokemon.name);
    };
    
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img src= {pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"/>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                     <div>#{pokemon.id}</div>
                </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, idx) => {
                    return <div key={idx} className="pokemon-type-text">{type.type.name}</div>;       
                 })}
                </div>
                <button onClick = {clickHeart}>
                <div className="pokemon-favourite">{heart}</div>
                </button>
                </div>
             </div>
        </div>
        );
};

export default Pokemon;