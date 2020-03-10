import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Title, BannerContact}  from '../Library'
import Text from './Text'
import ServiceList from './ServiceList'
import styles from './Services.module.css'


const Services = () => {
    const title = "¿Qué ofrecemos?";
    const banner = {
        text: '¿Querés ofrecer lo último a tus pacientes?',
        href: '#contacto',
        btnText: 'Conocer más'
    };
    
    return (
        <section id="servicios" className={ styles.section }>
            <Title title={ title }/>
            <Container>
                <Row>
                    <Text/>
                    <ServiceList/>
                </Row>
                <Row>
                    <BannerContact 
                        text={ banner.text }
                        href={ banner.href }
                        btnText={ banner.btnText }
                    />
                </Row>
            </Container>
        </section>
    )
}

export default Services;