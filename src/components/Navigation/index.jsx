import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import styles from './Navigation.module.css'

const Navigation = () => {
    const toggle = useRef();
    const ul = useRef()

    const handleClick= ()=>{
        ul.current.classList.toggle( styles.active );
    }
    
    return (
        <nav>
            <Logo />
            <button 
                ref={ toggle }
                onClick={ handleClick }
                className={ styles.toggle }
            >
                <FontAwesomeIcon icon={ faBars } />
            </button>
            <ul 
                ref={ ul }
                className={ styles.ul }>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#equipos">Equipos</a></li>
                <li><a href="#capacitaciones">Capacitaciones</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;