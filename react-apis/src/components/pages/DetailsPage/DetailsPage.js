import Header from "../..//header/Header";
import {useContext } from "react"
import {GlobalContext} from "../../contexts/GlobalContext"
function DetailsPage(props) {
  const context = useContext(GlobalContext)
  const {frase}= context

  return (
    <div>
      <Header />
      <h1>Ainda não tem nada!</h1>
    </div>
  );
}

export default DetailsPage;

//Fazer tudo pegando por context do app, fazer useEffect,fazeer uma para receber a url, fazer um map no return e estilizar