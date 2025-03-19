import { Link } from "react-router-dom";
import "./Error404.css";

import { TbError404 } from "react-icons/tb";
function Error404(){
    return(
      <div className="error404">
      <p className="error"> <TbError404/> 404 ERROR NO FOUND</p>
      <button className="btnError" id="custom">
        <Link to="/">
          Volver a la pagina principal
        </Link>
      </button>
      </div>
    )
}
export default Error404;