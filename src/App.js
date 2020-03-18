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
            <Route 
              path="/" 
              component={ Navigation }
            />
            <Route 
              path="/" 
              exact
            >
              <Home />
              <Services />
              <Equipos />
            </Route>
            <Route path="/equipos/:id">
              <br/><br/><br/>
 
            </Route>
          </BrowserRouter>
         </EquipmentContextProvider>
    </div>
  );
}

export default App;
