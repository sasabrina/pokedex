import React, {useState, useEffect} from 'react'
import {fetchAbilities} from '../../helpers/index'
import './PokemonModal.scss'

const PokemonModal = ({name, id, abilities}) => {
    const [abilitiesData, setAbilitiesData] = useState([])

    const getAbilities = () =>{
        fetchAbilities(abilities, setAbilitiesData)
        console.log(abilitiesData)
    }

    useEffect(()=> {
        getAbilities()
    }, [])

    return(
        <>
            <h2>{name}</h2>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>

            {abilitiesData && abilitiesData.map((a, i) => (<p key={i}>{a.es.name}</p>))}
        </>
    )
}

export default PokemonModal