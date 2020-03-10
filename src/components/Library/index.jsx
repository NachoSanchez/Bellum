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
            <Row className="py-3">
                <h1 className={ styles.title }>
                    { props.title }
                </h1>
            </Row>
        </Container>
    )
}

export const BannerContact = props => {
    return (
        <div className={styles.banner}>
            <h3>{ props.text }</h3>
            <PrimaryButton href={props.href} text={props.btnText}/>
        </div>
    )
}

