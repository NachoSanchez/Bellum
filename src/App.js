import React from 'react';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Services from './components/Services'
import Equipos from './components/Equipos'
import EquipmentContextProvider from './contexts/EquipmentContext'

function App() {
  return (
    <div className="App">
         <Navigation />
         <Home />
         <Services />
         <EquipmentContextProvider>
           <Equipos></Equipos>
         </EquipmentContextProvider>
    </div>
  );
}

export default App;
