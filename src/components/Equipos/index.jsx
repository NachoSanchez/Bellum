import React,{ useContext } from 'react'
import { EquipmentContext } from '../../contexts/EquipmentContext'

const Equipos = () => {
    const equipments = useContext(EquipmentContext);

    return (
        <section id="equipos">
            <ul>
                {
                    equipments.map( equipment => (
                    <li key={ equipment.id }> { equipment.name } </li>
                    ))
                } 
            </ul> 
        </section>
    )
}

export default Equipos;