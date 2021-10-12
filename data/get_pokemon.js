import Axios from "axios";

export async function getPokemon(id) {
  let pokemon;
  try {
    let url = process.env.POKEMON_URL + "/pokemons/" + id;
    const res = await Axios.get(url);
    pokemon = res.data;
  } catch (err) {
    throw err.response.data;
  }

  return pokemon;
}
