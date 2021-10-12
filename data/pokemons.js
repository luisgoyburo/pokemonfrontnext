import Axios from "axios";
export async function getAllPokemons() {
  let pokemons;
  try {
    let url = process.env.POKEMON_URL + "/pokemons?limit=100&skip=0";
    const res = await Axios.get(url);
    pokemons = res.data;
  } catch (err) {
    throw err.response.data;
  }

  return pokemons;
}
