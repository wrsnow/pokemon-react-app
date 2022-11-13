import React from "react";

export default function FilterPoke({ handleSearch, inputElement, sortSelect }) {
  return (
    <div className="search--bar">
      <input onChange={handleSearch} type="text" placeholder="Pikachu" />
      <select onInput={sortSelect} name="" id="">
        <option value="sort0">Choose</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="height">Height</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  );
}
