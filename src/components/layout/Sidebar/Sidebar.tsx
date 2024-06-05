import React from "react"

import { NavLink } from "react-router-dom";

import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
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
                            Cadastro Informações
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/cadastro" className={styles.active} >
                            Cadastrar Experiência
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/curriculo/experiencia/listagem" className={styles.active} >
                            Cadastrar lista
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
                        <NavLink to="/portfolio/listagem" className={styles.active} >
                            Listagem de Portfolio
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Sidebar;