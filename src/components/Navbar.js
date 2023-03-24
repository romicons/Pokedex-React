import React from 'react';

let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
const Navbar = () => {
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
            <div> &#10084;&#65039;{100}</div>
        </nav>
    );
};

export default Navbar;