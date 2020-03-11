import React, { useContext } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slide from './Slide'
import { EquipmentContext } from '../../contexts/EquipmentContext'


const Slider = () => {
    const equipments = useContext(EquipmentContext);

    return (
        <Carousel 
            indicators={ false }
            className="justify-content-md-center"
        >
            {
                equipments.map( equipment => (
                    <Carousel.Item>
                        <Slide
                            img={ equipment.img }
                            name={ equipment.name }
                            description={ equipment.description }
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Slider;