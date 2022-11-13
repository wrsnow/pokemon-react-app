export const PokemonModal = (uid, arr, SelectedPoke, ShowModal) => {
  let tempPoke = arr.filter((poke) => (poke.id == uid ? poke : null));

  SelectedPoke(tempPoke[0]);
  ShowModal(true);
};
