import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import Modal from "./Modal";
import { ModalPopUp } from "../components/PokemonAppFunctions";
import useFetch from "../hooks/useFetch";
import Navbar from "./Navbar";

function PokemonApp() {
  const [pokeData, isFetching, Error] = useFetch(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const [ShowModal, setShowModal] = useState(false);
  const [PokemonDATA, setPokemonDATA] = useState(() => pokeData || []);
  const [selectedPoke, setSelectedPoke] = useState({});
  const [isFilteringActive, setIsFilteringActive] = useState(false);

  function changeModalState() {
    setShowModal((prev) => !prev);
  }

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

  const PokemonCARD = lazy(() => import("./PokemonCARD"));
  const renderPokeCards = PokemonDATA?.map((poke) => (
    <PokemonCARD
      url={poke.image}
      infos={poke}
      key={poke.name}
      pokemonID={() =>
        ModalPopUp(poke.id, pokeData, setSelectedPoke, setShowModal)
      }
    />
  ));

  const h1Style = {
    textAlign: "center",
    color: "#fff",
    fontSize: "1rem",
  };

  if (isFetching) {
    return (
      <>
        <Navbar />
        <div className="text-container">
          <h1 style={h1Style}>Loading...</h1>
        </div>
      </>
    );
  }
  console.log(Error);

  if (Error) {
    return <h1 style={h1Style}>Something went wrong...</h1>;
  }

  return (
    <div className="PokeContent">
      {PokeModal}
      <Navbar
        setIsFilteringActive={setIsFilteringActive}
        setPokemonDATA={setPokemonDATA}
        pokeData={pokeData}
      />
      <div className="pokemonsCatalog">
        <Suspense fallback={<h1>Loading...</h1>}>
          {isFilteringActive
            ? renderPokeCards
            : pokeData?.map((poke) => (
                <PokemonCARD
                  url={poke.image}
                  infos={poke}
                  key={poke.name}
                  pokemonID={() =>
                    ModalPopUp(poke.id, pokeData, setSelectedPoke, setShowModal)
                  }
                />
              ))}
        </Suspense>
      </div>
    </div>
  );
}
export default PokemonApp;
