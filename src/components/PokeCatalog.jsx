import React, { useState } from "react";
import PokemonCARD from "./PokemonCARD";

export default function PokemonCatalog(props) {
  const [CatalogData, setCatalogData] = useState(props.mainData || []);
  let RenderPokemons = CatalogData.map((element, index) => (
    <PokemonCARD
      url={element.image}
      infos={element}
      key={element.id}
      pokemonID={() => props.renderPokemonModal(element.id)}
    ></PokemonCARD>
  ));

  return <div className="pokemonsCatalog">{RenderPokemons}</div>;
}
