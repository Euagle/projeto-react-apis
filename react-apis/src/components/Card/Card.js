import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../routes/coordinator";
import { ImgStyle } from "./Card.styled";
import { Type } from "../types/Type";
// import { TypeColor } from "../types/TypeColor";

function Card(props) {

  const { pokemonUrl, addToPokedex, removeFromPokedex } = props;

  // hook para saber nosso path atual
  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState({});

  // guarda, porque ainda não renderizamos
  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  return (
    <ImgStyle>
    <div className="container"  >
   
    <div className="info">
     <p>#0{pokemon.id} </p>
        <h2>{pokemon.name} </h2>
        <img src={pokemon.sprites?.other.dream_world.front_default} alt={pokemon.name} />
        </div>
        <div className="types">{pokemon.types?.map((type) => {
            // console.log(type.type.name);
            return <img src={Type(type.type.name)}/>;
          })}</div>
        
      
      {/* <div>
      
      
      </div> */}
      
      <div  className="button">
      
        {location.pathname === "/" ? (
          <button  className="cap" onClick={() => addToPokedex(pokemon)}>
Capturar!          </button>
        ) : (
          <button className="bntDel" onClick={() => removeFromPokedex(pokemon)}>
            Excluir
          </button>
        )}

<p  className="details" onClick={() => goToDetailsPage(navigate, pokemon.name)}>
          detalhes
        </p>
      </div>
            </div>

    </ImgStyle>
  );
}

export default Card;
