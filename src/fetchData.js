import { productos } from "../productos";

export const fetchData = () => new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(productos); // productos es un array de objetos
    }, 3000);// 3 segundos de espera
})