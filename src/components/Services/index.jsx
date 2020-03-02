import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Title }  from '../Library'
import Text from './Text'
import styles from './Services.module.css'

const Services = () => {
    const title = "¿Qué ofrecemos?";
    return (
        <section id="servicios" className={ styles.section }>
            <Title title={ title }/>
            <Container>
                <Row>
                    <Text/>
                </Row>
            </Container>
        </section>
    )
}

export default Services;