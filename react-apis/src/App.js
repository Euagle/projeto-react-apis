import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./components/constants/url";
import { GlobalContext } from "./components/contexts/GlobalContext";
import Router from "./components/routes/Router";

export default function App() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    fetchPokelist();
  }, []);

  const fetchPokelist = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setPokelist(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  //caso o nome seja igual, pode usar abreviação, removendo a igualdade.
 const context = {
pokelist: pokelist,
addToPokedex:addToPokedex,
removeFromPokedex: removeFromPokedex,
pokedex : pokedex,
 }
  return (
    <>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </>
  );
}
