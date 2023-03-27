import React from 'react';
import FavouriteContext from '../context/favouriteContext.js';

const {useContext} = React;

const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    const {favouritePokemons} = useContext(FavouriteContext);
    return (
        <nav>
            <div />
            <div>
            <img 
            src={imgUrl} 
            alt="pokeapi-logo" 
            className="navbar-image"
            />
            </div>
            <div> ❤️ {favouritePokemons.length}</div>
        </nav>
    );
};

export default Navbar;