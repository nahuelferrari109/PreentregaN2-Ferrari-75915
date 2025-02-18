import './Navbar.css';
import CartWidget from "../CartWidget/CartWidget"
function Navbar(){
    return(
        <header className='header card-panel  blue-grey lighten-3'>
            <nav className='navbar  '>
                <div  className="nav-wrapper  ">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="">Inicio</a></li>
                        <li><a href="">Productos</a></li>
                        <li><a href="">Contacto</a></li>
                        <CartWidget/>
                    </ul>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </nav>
        </header>
    );
};

export default Navbar;
