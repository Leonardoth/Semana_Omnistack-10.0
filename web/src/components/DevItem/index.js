import React from 'react';
import './styles.css';
import api from '../../services/api'

function DevItem({dev}){
    async function deleteDev(){
      await api.get(`/destroy?github_username=${dev.github_username}`)
      alert(`Usuário ${dev.github_username} deletado com sucesso.`)
      window.location.reload()
    }

    return (
    <li key={dev._id} className="dev-item">
          <header>
            <img src={dev.avatar_url} alt={dev.name} />
            <div className="user-info">
              <strong> {dev.name}</strong>
              <span> {dev.techs.join(', ')}</span>
            </div>
          </header>
          <div className="main">

            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}> Perfil do github </a>
            <div className="button_container">
              <div className="buttons">
                <div className="left">
                  <button>Edit Profile</button>
                </div>
                <div className="right">
                  <button onClick={deleteDev}>Delete</button>
                </div>
              </div>
            </div>
          </div>
    </li>)
}

export default DevItem;