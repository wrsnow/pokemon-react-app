import React from "react";
import { sortList, handleSearch } from "./PokemonAppFunctions";

function Navbar({ setPokemonDATA, pokeData, setIsFilteringActive }) {
  const sortPokemons = (e) => {
    sortList(e, setPokemonDATA, pokeData, setIsFilteringActive);
  };
  const searchByName = (e) => {
    handleSearch(e, setPokemonDATA, pokeData, setIsFilteringActive);
  };

  return (
    <div className="search--bar">
      <input onChange={searchByName} type="text" placeholder="Pikachu" />
      <select onInput={sortPokemons} name="" id="">
        <option value="">Choose</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="height">Height</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}

export default Navbar;
