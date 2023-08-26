import { NavLink } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";

import { useAuthValue } from "../context/AuthContext";

import './Navbar.css'

const Navbar = () => {

    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    return ( 
        <nav>
           
            <NavLink to="/home">Home</NavLink>
            
            {!user && (
                <> 
                    <li>
                        <NavLink to="/register">Cadastrar</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/login">Login</NavLink>
                    </li>
                    
                </>
            )}
            
            
            <NavLink to="/about">Sobre</NavLink>     

            {user && (
                <li>
                    <button onClick={logout}>Sair</button>
                </li>
            )}

            
            
        </nav>
     );
}
 
export default Navbar;