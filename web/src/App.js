import React, { useState, useEffect } from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api'
import DevItem from './components/DevItem'
import DevForm from './components/DevForm'
import DevSearch from './components/DevSearch'



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

async function searchDev(data){
  const response = await api.get(`/search?github_username=${data.searchText}`)
  console.log(response.data)
  if(!response.data){
    return setDevs([])
  }
  setDevs([response.data])
}

  return (
    <div id="app">
    <aside>
    <strong> Cadastrar </strong>
          <DevForm onSubmit={handleAddDev}/>
    </aside>
    <main>
      <div className="search">
        <DevSearch onSubmit={searchDev}/>
      </div>
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
