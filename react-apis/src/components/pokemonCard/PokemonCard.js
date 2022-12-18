// import axios from "axios";
// import { useEffect, useState } from "react";
// import { ImgStyle,  PokeType } from "./Styled";
// import { Link } from "react-router-dom";
// import { Type } from "../types/Type";


// export const PokemonCard = (props) => {
//   const { pokemon } = props;
//   // const {addToPokedex} = context
//   const [info, setInfo] = useState({});

//   // console.log(pokemon)

//   useEffect(() => {
//     axios
//       .get(pokemon.url)
//       .then((response) => {
//         setInfo(response.data);
//         // console.log(response.data);
//       })
//       .catch((ERROR) => {
//         console.log(ERROR);
//       });
//   }, []);
//   console.log(info);
//   // if(info.type==="paison"){
    

//   // }

//   return (
//     <ImgStyle>
//       {/* <h1>todos os pokemons</h1> */}

//       <div className="container">

//         <div className="info">
//           <p>#0{info.id} </p>
//         <h2>{info.name} </h2>

        
//         <img src={info.sprites?.other.dream_world.front_default} alt={info.name} />


       
//         </div>

//         {/* <img src={info.sprites?.front_default} alt={info.name} /> */}



//         <div className="types">
//           {info.types?.map((type) => {
//             // console.log(type.type.name);
//             return <PokeType src={Type(type.type.name)}/>;
//           })}

       


//         </div>
//         <div className="button">
//           <Link >
//           {/* <button className="details">Detalhes</button> */}
//           <p className="details">Detalhes</p>

//           </Link>

//           <button className="cap">Capturar!</button>


//           </div>


        
        
//         </div>

//         {/* <img
//         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png
//         `}
//         alt={`pokemon ${pokemon.name}`}
        
//       />  
//                   <p>{pokemon.name}</p> */}
//       {/* </div> */}
//     </ImgStyle>
//   );
// };

// //Criar uma lógica com Switch case, para verificar o type, sendo tal type, retornar uma imagem.

// //Cores: Sendo de tal type, retornar uma cor de card
