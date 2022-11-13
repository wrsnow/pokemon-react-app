export default [
  {
    name: "Charizard",
    url: "https://img.pokemondb.net/artwork/avif/charizard.avif",
    height: "1.7 m",
    weight: "90.5 kg",
    uniqueID: UniqueID(),
  },
  {
    name: "Squirtle",
    url: "https://img.pokemondb.net/artwork/avif/squirtle.avif",
    height: "0.5 m",
    weight: "9.0 kg",
    uniqueID: UniqueID(),
  },
  {
    name: "Blastoise",
    url: "https://img.pokemondb.net/artwork/avif/blastoise.avif",
    height: "1.6 m",
    weight: "85.5 kg",
    uniqueID: UniqueID(),
  },
  {
    name: "Charizard",
    url: "https://img.pokemondb.net/artwork/avif/charizard.avif",
    height: "1.7 m",
    weight: "90.5 kg",
    uniqueID: UniqueID(),
  },
  {
    name: "Squirtle",
    url: "https://img.pokemondb.net/artwork/avif/squirtle.avif",
    height: "0.5 m",
    weight: "9.0 kg",
    uniqueID: UniqueID(),
  },
  {
    name: "Blastoise",
    url: "https://img.pokemondb.net/artwork/avif/blastoise.avif",
    height: "1.6 m",
    weight: "85.5 kg",
    uniqueID: UniqueID(),
  },
];

function UniqueID() {
  let num1 = Math.random().toString(36).substring(4);
  let num2 = Math.random().toString(36).substring(4);
  let num3 = Math.random().toString(36).substring(4);

  return num1 + num2 + num3;
}
