import React from 'react'
import Container from 'react-bootstrap/Container'
import { Title } from '../Library'
import Slider from './Slider'

const Equipos = () => {

    return (
        <section id="equipos">
            <Title title="Nuestros Equipos" />
            <Container>
                <Slider />
            </Container>
        </section>
    )
}

export default Equipos;