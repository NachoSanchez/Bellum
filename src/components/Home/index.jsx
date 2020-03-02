import React from 'react'
import Container from 'react-bootstrap/Container'
import styles from './Home.module.css'
import { PrimaryButton } from '../Library'

const Home = () => {
    return (
        <main id="home">
            <Container>
                    <h1>
                        Somos <strong>Bellum</strong>
                    </h1>
                    <p>Alquilamos equipamiento de estética </p>
                    <div className={ styles['word-slider'] }>
                        para
                        <ul>
                            <li>Clínicas.</li>
                            <li>Profesionales.</li>
                            <li>Consultorios.</li>
                            <li>Centros.</li>
                            <li>Clínicas.</li>
                        </ul>
                    </div>

                    <PrimaryButton 
                        href={'#contacto'} 
                        text={ 'contactanos' } 
                    />
                    
            </Container>
        </main>
    )
}

export default Home;