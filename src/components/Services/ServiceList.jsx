import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from './Services.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog,
         faAward, 
         faShippingFast, 
         faChartLine } from '@fortawesome/free-solid-svg-icons'

const ServiceList = () => {
    
    return(
        <Col md={7} sm={12}>
            <Row className="py-5">
        
                        <Col className={ styles.card }>
                            <FontAwesomeIcon icon={faCog} />
                            <p>Tecnología de vanguardia.</p>
                        </Col>
                        <Col className={ styles.card }>
                            <FontAwesomeIcon icon={faAward} />
                            <p>Capacitamos a tu personal.</p>
                        </Col>
                        <Col className={ styles.card }>
                            <FontAwesomeIcon icon={faShippingFast} />
                            <p>Logística a cargo nuestro.</p>
                        </Col>
                        <Col className={ styles.card }>
                            <FontAwesomeIcon icon={faChartLine} />
                            <p>Invertí menos, ganá más!</p>
                        </Col>                        
     
            </Row>
        </Col>
    )
}

export default ServiceList;