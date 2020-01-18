import React, { useState } from 'react';
import './styles.css';


// Futuramente posso colocar um 'dropdown list' pra selecional qual o field que faremos a busca, ex: techs, bio, username etc.

function DevSearch({onSubmit}){
    const [searchText, setSearchText ] = useState('');

    async function devSearch(e){
        e.preventDefault();
        await onSubmit({
            searchText,
        });

    }
    // O botão 'back' no código a seguir não faz nada, apenas atualiza a página (default), fazendo com que o loadDevs da pagina seja executado novamente.
    return (
        <div>
            <form>
                
                <button> Back </button>
                <input placeholder="Procurar username..." onChange={e => setSearchText(e.target.value)}></input>
                <button onClick={devSearch}>Search</button>
            </form>
        </div>
    )
}

export default DevSearch;