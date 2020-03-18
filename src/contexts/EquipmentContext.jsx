import React, { Component, createContext } from 'react';
import equipments from './equipment.json'

export const EquipmentContext = createContext();

class EquipmentContextProvider extends Component {
    state = { equipments: equipments } 

    render(){
        return (
            <EquipmentContext.Provider value={ this.state.equipments }>
                {this.props.children}
            </EquipmentContext.Provider>  
        );
    }
}

export default EquipmentContextProvider;