import { Link } from "react-router-dom";
import styles from './inicio.module.css'; 
import Titulo from "./Titulo";

function Inicio (){



    return(
    
       <>
        <div className={styles.containerTitulo}>
            <h1>Restaurante</h1>
        </div>
        <div className={styles.botaoPedido}>
            <Link to="/pedido"><button>Fazer Pedido</button></ Link> 
        </div>
        <Titulo />
      </>
   
    )
}

export default Inicio;