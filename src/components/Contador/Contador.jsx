
import "./Contador.css";
import { useAppContext } from "../../Context/context";


function Contador({stock}){
    
    const {contador, setContador} = useAppContext(); //estado del contador
   
    return ( 
        <div className="contador-contenedor">
            <h1 className="text-contador">Contador</h1>
            <div className="boton-contador-contenedor">
                <button disabled={contador === 1} className="btn-contador" onClick={() => setContador(contador-1)} >-</button> 
                <h2 className="numero">{contador}</h2>
                <button  disabled={contador === stock} className="btn-contador" onClick={() => setContador(contador + 1)}>+</button>
            </div>
        </div>
    )
} 



export default Contador;