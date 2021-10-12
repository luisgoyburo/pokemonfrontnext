import Axios from "axios";
export async function getAllPokemonsPerPage(limit, skip) {
  let pokemons;
  try {
    let url =
      process.env.POKEMON_URL + "/pokemons?limit=" + limit + "&skip=" + skip;
    const res = await Axios.get(url);
    pokemons = res.data;
  } catch (err) {
    throw err.response.data;
  }

  return pokemons;
}
