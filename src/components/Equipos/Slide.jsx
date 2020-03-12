import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { PrimaryButton } from '../Library'
import styles from './Equipos.module.css'

const Slide = (props) => {
    let img = styles.img +' '+ props.img
    return (
            <Row className="align-items-center">
                <Col md={6} sm={10}> 
                    <div className={ img }></div>
                </Col>
                <Col md={4} sm={6} className={ styles['item-info'] }>
                    <h3>{ props.name }</h3>

                    <p> { props.shortDesc } </p>

                    <PrimaryButton
                        href={ null }
                        text="Conocer más"
                    /> 
                </Col>
            </Row>
    )
}

export default Slide;