import React from "react"

import { NavLink } from "react-router-dom";

import styles from './Sidebar.module.css';
import { useAuth } from "../../../contexts/AuthContext";

const Sidebar: React.FC = () => {

    const { logout } = useAuth();

    return (
        <div className={styles.sidebar}>
            <nav className={styles.navigation}>

                <ul>
                    <li>
                        <NavLink to="/" >
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>

                <h3>Currículo</h3>
                <ul>
                    <li>
                        <NavLink to="/curriculo/informaçoes/cadastro" className={styles.active} >
                            Cadastrar Informações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastro" className={styles.active} >
                            Cadastrar Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/lista" className={styles.active} >
                            Lista de Experiência
                        </NavLink>
                    </li>
                </ul>

                <h3>Portfólio</h3>
                <ul>
                    <li>
                        <NavLink to="/portfolio/cadastro" className={styles.active} >
                            Cadastrar Portfólio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/portfolio/lista" className={styles.active} >
                            Lista de Portfolio
                        </NavLink>
                    </li>
                </ul>

                <ul>
                    <li>
                        <NavLink onClick={logout} to="/login" >
                            <h3>Logout</h3>
                        </NavLink>
                    </li>
                </ul>


            </nav>
        </div>
    );
};

export default Sidebar;