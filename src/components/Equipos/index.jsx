import React from 'react'
import Container from 'react-bootstrap/Container'
import { Title } from '../Library'
import Slider from './Slider'
import styles from './Equipos.module.css'

const Equipos = () => {

    return (
        <section id="equipos" className={ styles.section }>
            {/* <Title title="Nuestros Equipos." /> */}
            <Container>
                <div className={styles.mask}>
                    <Slider />
                </div>
                <div className={ styles.fg }></div>
            </Container>
            
        </section>
    )
}

export default Equipos;