import React from 'react';
import {searchPokemon} from "../api";
const {useState} = React;

const Searchbar = (props) => {
    
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }

    const onClick = async (e) => {
        const data = await searchPokemon(search);
        searchPokemon(data);

    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input 
                 placeholder="Busca tu pokemon..." 
                 onChange= {onChange}
                 />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>         
            </div>
            <div>

            </div>
        </div>
        );
};

export default Searchbar;

