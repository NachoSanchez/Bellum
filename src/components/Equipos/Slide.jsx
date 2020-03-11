import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { PrimaryButton } from '../Library'
import styles from './Equipos.module.css'

const Slide = (props) => {
    let img = styles.img +' '+ props.img
    return (
            <Row>
                <Col md={6} sm={10}> 
                    <div className={ img }></div>
                </Col>
                <Col md={4} sm={6} offset={ 2 }>
                    <h3>{ props.name }</h3>

                    <p> { props.description } </p>

                    <PrimaryButton
                        href={ null }
                        text="Conocer más"
                    /> 
                </Col>
            </Row>
    )
}

export default Slide;