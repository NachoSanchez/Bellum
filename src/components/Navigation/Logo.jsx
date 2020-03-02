import React from 'react'
import styles from './Navigation.module.css'
import img from '../../assets/img/bellum_color.png'

const Logo = () => {
    return (
        <a href="#home" className={ styles.logo }>
            <img src={ img } alt="Bellum Aparatología"/>
        </a>
    )
}

export default Logo;