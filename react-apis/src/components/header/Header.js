import { useLocation, useNavigate } from "react-router-dom";
import { goToHomePage, goToPokedexPage } from "../routes/coordinator";
// import {  useState } from "react";

// import { goToDetailsPage } from "../../routes/coordinator";

import { Container } from "./Header.styled";
import image from "../icons/image.svg"

function Header(props) {
  // hook para saber nosso path atual
    // const {  removeFromPokedex } = props;
      // const [pokemon, setPokemon] = useState({});


  const location = useLocation();

  // hook para redirecionar
  const navigate = useNavigate();

  const renderHeader = () => {
    
    switch (location.pathname) {
      case "/":
        return (
          <>
          <div className="home">
            <button onClick={() => goToPokedexPage(navigate)}>
              Ver pokedex
            </button>
            <img src={image} />
            </div>
            {/* <span>Lista de pokemons</span> */}
          </>
        );
      case "/pokedex":
        return (
          <>
          <div className="pokedex">
            <h3 onClick={() => goToHomePage(navigate)}>
            <strong>   Todos pokemons </strong> 
            </h3>
            <img src={image} />
            </div>
          </>
        );
      default:
        return (
          <>
          <div className="details">
            <h3 onClick={() => goToHomePage(navigate)}>
                          <strong>   Todos pokemons </strong> 

            </h3>

            <img src={image} />
                    <button className="bntDel">
            Excluir da Pokédex
          </button>
            </div>
          </>
        );
    }
  };

  return <Container>{renderHeader()}</Container>;
}

export default Header;
