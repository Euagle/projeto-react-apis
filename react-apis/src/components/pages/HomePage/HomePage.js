import Card from "../../Card/Card";
import { Container } from "./HomePage.styled";
import Header from "../../header/Header";
import {useContext } from "react"
import {GlobalContext} from "../../contexts/GlobalContext"
function HomePage(props) {
  // const { pokelist, addToPokedex, pokedex } = props;
const context = useContext(GlobalContext)

const { pokelist, addToPokedex, pokedex}= context
  // não mostrar pokemons que estão na pokedex
  const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

  return (
    <Container>
      <Header />
      <section>
                  <h1>Todos os pokemons</h1>

        {filteredPokelist().map((pokemon) => (
          <Card
            key={pokemon.url}
            pokemonUrl={pokemon.url}
            addToPokedex={addToPokedex}
          />
        ))}
      </section>
    </Container>
  );
}

export default HomePage;
