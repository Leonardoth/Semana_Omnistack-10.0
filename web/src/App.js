import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'

// No React se usa 'htmlFor' e 'className' ao inves de for e class, pois no Js essas palavras são reservadas.

// Desafio: Criar update e destroy no frontend, com botões específicos.
// Desafio pessoal: criar uma barra de search para filtrar os devs.


function App() {
  const [devs, setDevs] = useState([]);

  

  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data)
    }

    loadDevs();
  }, [])
  
  async function handleAddDev(data){
    const response = await api.post('/devs', data)
    console.log(response.data)

   
    setDevs([...devs, response.data]);
}



  return (
    <div id="app">
    <aside>
    <strong> Cadastrar </strong>
          <DevForm onSubmit={handleAddDev}/>
    </aside>
    <main>
      <ul>
        {devs.map(dev => (
          <DevItem key= {dev._id} dev={dev}/>
        ))}
      </ul>
    </main>
  </div>
  );
}

export default App;
