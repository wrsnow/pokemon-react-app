import React, { useEffect, useMemo, useState } from "react";
import { getUrl } from "../components/PokemonAppFunctions";

export default function PokemonCARD(props) {
  const { name, height, weight, types } = props.infos;

  let PokeTypes = types.map((each) => {
    return {
      ...each.type,
      url: getUrl(each.type.name),
    };
  });

  const RenderPokemonTypes = PokeTypes.map((types, idx) => (
    <img
      key={idx}
      src={types.url}
      alt={"type-" + types.name}
      title={types.name.toUpperCase()}
    />
  ));

  return (
    <div onClick={props.pokemonID} className="pokemon-card">
      <div className="types-bar">{RenderPokemonTypes}</div>
      <img src={props.url} alt="" />
      <h2>{name[0].toUpperCase() + name.substring(1)}</h2>
      <p>Height: {`${height / 10} m`}</p>
      <p>Weight: {`${weight / 10} kg`}</p>
    </div>
  );
}
