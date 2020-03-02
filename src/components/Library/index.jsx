import React from 'react'
import styles from './Library.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const PrimaryButton = props => {
    return (
        <a 
            href={ props.href } 
            className={ styles['primary-btn'] }
        >
            { props.text }
        </a>
    )
}

export const Title = props => {
    return (
        <Container>
            <Row>
                <h1 className={ styles.title }>
                    { props.title }
                </h1>
            </Row>
        </Container>
    )
}