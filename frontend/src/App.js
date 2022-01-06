import React from "react";
import './App.css';

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Componentes
import ListadoFolder from './components/folders/ListadoFolder';
import EditarTask from './components/tasks/EditarTask';
import ListadoTask from './components/tasks/ListadoTask';


function App() {

  return (
    <>

      <Router>
        <Routes>

          <Route exact path='/' element={<ListadoFolder />} />
          <Route exact path='/folders/:id' element={<ListadoTask />} />
          <Route exact path='/editarTask/:id' element={<EditarTask />} />

        </Routes>
      </Router>



    </>

  );
}

export default App;