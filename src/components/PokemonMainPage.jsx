import { useEffect, useMemo, useState } from "react";
import PokemonCARD from "./PokemonCARD";
import FilterPoke from "./PokemonSearchBar";
import Modal from "./Modal";
import {
  ModalPopUp,
  sortList,
  handleSearch,
} from "../components/PokemonAppFunctions";

function PokemonApp() {
  const [Test, setTest] = useState([]);

  ///////////////
  const [APIData, setApiDATA] = useState(() => {
    const LocalStorage = JSON.parse(localStorage.getItem("PokemonsDATA"));
    return [...new Set(LocalStorage)] || [];
  });
  const [ShowModal, setShowModal] = useState(false);
  const [PokemonDATA, setPokemonDATA] = useState(() => APIData || []);
  const [selectedPoke, setSelectedPoke] = useState({});

  useEffect(() => {
    async function getPokemons() {
      console.log("Fetching items");
      let Array = [];
      let NumbersArr = [];
      while (Array.length < 3) {
        let randomNum = Math.floor(Math.random() * 540);
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

    let FromLocal = JSON.parse(localStorage.getItem("PokemonsDATA"));
    if (FromLocal) {
      console.log("IF STATEMENT TRUE");
      setApiDATA(FromLocal);
      return;
    } else {
      console.log("IF STATEMENT FALSE");
      getPokemons().then((Data) => {
        localStorage.setItem("PokemonsDATA", JSON.stringify(Data));
        setPokemonDATA(Data);
      });
    }
  }, []);

  function changeModalState() {
    setShowModal((prev) => !prev);
  }

  let RenderPokemons = PokemonDATA.map((element) => (
    <PokemonCARD
      url={element.image}
      infos={element}
      key={element.name}
      pokemonID={() =>
        ModalPopUp(
          element.id,
          PokemonDATA,
          setSelectedPoke,
          setShowModal,
          setTest
        )
      }
    ></PokemonCARD>
  ));

  let PokeModal = useMemo(() => {
    let RenderModal = (
      <Modal
        modalState={ShowModal}
        selectedPoke={selectedPoke}
        showModal={changeModalState}
      ></Modal>
    );
    return RenderModal;
  }, [ShowModal, selectedPoke]);

  console.log(Test);

  return (
    <div className="PokeContent">
      {PokeModal}
      <FilterPoke
        handleSearch={(e) => handleSearch(e, setPokemonDATA, APIData)}
        sortSelect={(e) => sortList(e, setPokemonDATA, APIData)}
      ></FilterPoke>
      <div className="pokemonsCatalog">{RenderPokemons}</div>
    </div>
  );
}
export default PokemonApp;
