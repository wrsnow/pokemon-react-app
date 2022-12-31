import { useState, useEffect } from "react";

function useFetch() {
  const [pokeData, setPokedata] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [Error, setError] = useState([]);
  const pokeDataCache = JSON.parse(localStorage.getItem("pokedata"));

  useEffect(() => {
    setIsFetching(true);
    const controller = new AbortController();
    async function getPokemons() {
      let Array = [];
      let NumbersArr = [];
      while (Array.length < 20) {
        let randomNum = Math.floor(Math.random() * 649);
        if (!NumbersArr.includes(randomNum)) {
          NumbersArr.push(randomNum);

          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${randomNum}`
          );
          const data = await res.json();
          const { name, height, weight, types, id } = data;
          const items = { name, height, weight, types, id };
          Array.push({
            ...items,
            image: `/pokemon-react-app/assets/PokemonSVGs/${items.id}.svg`,
          });
        }
      }
      return Array;
    }

    if (pokeDataCache) {
      setPokedata(pokeDataCache);
      setIsFetching(false);
    } else {
      getPokemons()
        .then((data) => {
          localStorage.setItem("pokedata", JSON.stringify(data));
          setPokedata(data);
        })
        .catch((err) => setError(err))
        .finally(() => setIsFetching(false));
    }
    return () => {
      controller.abort();
    };
  }, []);

  return [pokeData, isFetching, Error];
}

export default useFetch;
