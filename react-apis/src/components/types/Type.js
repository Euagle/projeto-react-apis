import Bug from "../icons/Bug.svg"
import Dark from "../icons/Dark.svg"
import Dragon from "../icons/Dragon.svg"
import Electric  from "../icons/Electric.svg"
import Fairy  from "../icons/Fairy.svg"
import Fighting  from "../icons/Fighting.svg"
import Fire  from "../icons/Fire.svg"
import Ghost  from "../icons/Ghost.svg"
import Grass  from "../icons/Grass.svg"
import  Ground from "../icons/Ground.svg"
import  Ice from "../icons/Ice.svg"
import Normal  from "../icons/Normal.svg"
import Poison  from "../icons/Poison.svg"
import Psychic  from "../icons/Psychic.svg"
import Rock  from "../icons/Rock.svg"
import Steel  from "../icons/Steel.svg"
import Water  from "../icons/Water.svg"


export const Type = (type) => {
    switch (type) {
        case "bug":
          return Bug;
        case "dark":
          return Dark;
        case "dragon":
          return Dragon;
        case "electric":
          return Electric;
        case "fairy":
          return Fairy;
        case "fighting":
          return Fighting;
        case "fire":
          return Fire;
        // case "flying":
        //   return Flying;
        case "ghost":
          return Ghost;
        case "grass":
          return Grass;
        case "ground":
          return Ground;
        case "ice":
          return Ice;
        case "normal":
          return Normal;
        case "poison":
          return Poison;
        case "psychic":
          return Psychic;
        case "rock":
          return Rock;
        case "steel":
          return Steel;
        case "water":
          return Water;
        default:
          return Water;
    }
}



