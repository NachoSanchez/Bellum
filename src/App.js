import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Services from './components/Services'
import Equipos from './components/Equipos'
import EquipmentContextProvider from './contexts/EquipmentContext'

function App() {
  return (
    <div className="App">
      <EquipmentContextProvider>
          
          <BrowserRouter>

            <Route path="/">
              <Navigation />
            </Route>

            <Route path="/" exact>
              <Home />
              <Services />
              <Equipos />
            {/**
              Aquí va el resto del sitio,
              Contacto, Capacitaciones
            */}
            </Route>
            <Route path="/equipos/:id">
            {/**
             Aqui va el route al detalle de cada equipo
            */}
            </Route>

          </BrowserRouter>
      </EquipmentContextProvider>
    </div>
  );
}

export default App;
