import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { getAllPokemonsPerPage } from "../data/pokemons_2";
export default function Home({ pokemons }) {
  const router = useRouter();
  let { page } = router.query;

  const listPokemons = pokemons.map((pokemon) => (
    <tr
      key={pokemon["id"]}
      className="border-2 border-solid border-indigo-600 bg-gray-50 "
    >
      <td className=" bg-indigo-200 text-center px-3 border-t-2 border-l-2 border-r-2 border-indigo-500">
        {pokemon["Number"]}
      </td>
      <td className="bg-indigo-200  text-left px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Name"]}
      </td>
      <td className="bg-indigo-200  text-left px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Type_1"]}
      </td>
      <td className="bg-indigo-200 text-left px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Type_2"]}
      </td>
      <td className="bg-indigo-200 text-right px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Total"]}
      </td>
      <td className="bg-indigo-200 text-right px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["HP"]}
      </td>
      <td className="bg-indigo-200 text-right px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Attack"]}
      </td>
      <td className="bg-indigo-200 text-right px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Defense"]}
      </td>
      <td className="bg-indigo-200 text-right px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["SpecialAtk"]}
      </td>
      <td className="bg-indigo-200 text-right px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["SpecialDef"]}
      </td>
      <td className="bg-indigo-200 text-right px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Speed"]}
      </td>
      <td className="bg-indigo-200 text-center px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Generation"]}
      </td>
      <td className="bg-indigo-200 text-left px-3 border-t-2 border-r-2  border-indigo-500">
        {pokemon["Legendary"]}
      </td>
      <td className="bg-indigo-200 text-left px-3 border-t-2 border-r-2  underline text-blue-900  border-indigo-500">
        <Link href={`/pokemon?id=${pokemon["id"]}`}>
          <a>view</a>
        </Link>
      </td>
    </tr>
  ));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pokemon list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a
            className="text-blue-900"
            href="http://sailsback.apercloud.com/pokemons/"
          >
            Pokemons List!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          This App Consumes a Restful API that exposes a Pokemon database{" "}
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="http://sailsback.apercloud.com/pokemons/"
            className="p-6 mt-6 text-center border lg:w-[600px] sm:w-[400px] rounded-xl hover:text-blue-900 focus:text-blue-900"
          >
            <h3 className="text-2xl font-bold">Access Point: &rarr;</h3>
            <p className="mt-4 text-xl">
              http://sailsback.apercloud.com/pokemons/
            </p>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <h1 className="text-6xl font-bold text-blue-900">POKEMON LIST</h1>
        </div>
        <div className="border-b-2 border-indigo-500 pt-16">
          <table className="border-b-2 border-indigo-500 pt-6">
            <tbody>
              <tr>
                <th className="bg-pink-900 text-center text-white px-3 border-r-2  border-pink-100">
                  Number
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Name
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Type_1
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Type_2
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Total
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  HP
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Attack
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Defense
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  SpecialAtk
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  SpecialDef
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Speed
                </th>
                <th className="bg-pink-900 text-left px-3 text-white border-r-2  border-pink-100">
                  Generation
                </th>
                <th className="bg-pink-900 text-left px-3 text-white  border-r-2  border-pink-100">
                  Legendary
                </th>
                <th className="bg-yellow-900 text-left px-3 text-white border-r-2  border-yellow-900">
                  View
                </th>
              </tr>
              {listPokemons}
            </tbody>
          </table>
        </div>
        <div className="font-bold text-3xl pt-5 text-blue-900">PÁGINA:</div>
        <div className="flex flex-row space-x-10  text-3xl pt-5 pb-10">
          <div>
            <Link href="/">
              <a>1</a>
            </Link>
          </div>
          <div className={`${page == 2 ? "font-bold" : ""}`}>
            <Link href={`/index_2?limit=100&skip=100&page=2`}>
              <a>2</a>
            </Link>
          </div>
          <div className={`${page == 3 ? "font-bold" : ""}`}>
            <Link href={`/index_2?limit=100&skip=200&page=3`}>
              <a>3</a>
            </Link>
          </div>
          <div className={`${page == 4 ? "font-bold" : ""}`}>
            <Link href={`/index_2?limit=100&skip=300&page=4`}>
              <a>4</a>
            </Link>
          </div>
          <div className={`${page == 5 ? "font-bold" : ""}`}>
            <Link href={`/index_2?limit=100&skip=400&page=5`}>
              <a>5</a>
            </Link>
          </div>
          <div className={`${page == 6 ? "font-bold" : ""}`}>
            <Link href={`/index_2?limit=100&skip=500&page=6`}>
              <a>6</a>
            </Link>
          </div>
          <div className={`${page == 7 ? "font-bold" : ""}`}>
            <Link href={`/index_2?limit=100&skip=600&page=7`}>
              <a>7</a>
            </Link>
          </div>
          <div className={`${page == 8 ? "font-bold" : ""}`}>
            <Link href={`/index_2?limit=100&skip=700&page=8`}>
              <a>8</a>
            </Link>
          </div>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://apercloud.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Luis Goyburo
        </a>
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  let pokemons;
  const { limit } = context.query;
  const { skip } = context.query;
  try {
    pokemons = await getAllPokemonsPerPage(limit, skip);
  } catch (e) {
    return {
      notFound: true,
    };
  }
  if (!pokemons) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pokemons,
    },
  };
}
