import Header from "../..//header/Header";
import {useContext } from "react"
import {GlobalContext} from "../../contexts/GlobalContext"
function DetailsPage(props) {
  const context = useContext(GlobalContext)
  
  
  const { pokedex}= context
  return (
    <div>
      <Header />
      
      <h1>Ainda não tem nada!</h1>
    </div>
  );
}

export default DetailsPage;

// //Fazer tudo pegando por context do app, fazer useEffect,fazeer uma para receber a url, fazer um map no return e estilizar


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Header from "../../header/Header";
// import { BASE_URL } from "../../constants/url";

// const DetailsPage = () => {
//   const [pokemon, setPokemon] = useState();

//   useEffect(() => { 
//     axios.get("https://pokeapi.co/api/v2/pokemon")
//         .then((response)=>{
//       setPokemon(response.data);

//     })
//    .catch ((error)=> {
//     console.log(error);
//   });

//    }, []);



//   return (
//     <div>
//       <Header />
//         <div>
//           <p>{pokemon.name}</p>
//           <img src={pokemon.sprites.other.dream_world.front_default} />
//           <img src={pokemon.sprites.front_default} />
//           <img src={pokemon.sprites.back_default} />
//           <div>
//             <h1>Base stats</h1>
//             {pokemon.stats.map((stats) => {
//               return <p>{stats.stat.name}</p>;
//             })}
//             {pokemon.stats.map((stats) => {
//               return <p>{stats.base_stat}</p>
//             })}
//           </div>
//         </div>
//     </div>
//   );
// };
// export default DetailsPage;