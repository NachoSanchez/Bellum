import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { PrimaryButton } from '../Library'

const Slide = (props) => {
    return (
            <Row>
                <Col md={6} sm={10}> 
                    <div className={ 'img '+ props.img }></div>
                </Col>
                <Col md={6} sm={10}>
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