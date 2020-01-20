import React, {useState, useEffect} from 'react'
import {fetchAbilities} from '../../helpers/index'
import './PokemonModal.scss'

const PokemonModal = ({name, id, abilities}) => {
    const [abilitiesData, setAbilitiesData] = useState([])

    const getAbilities = () =>{
        fetchAbilities(abilities, setAbilitiesData)
    }

    useEffect(()=> {
        getAbilities()
    }, [])

    {console.log(abilitiesData)}

    // let ablitiesName = abilities.map((a, i) => (<p key={i}>{a.ability.name}</p>))
    return(
        <>
            <h2>{name}</h2>
            <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>

            {/* {ablitiesName} */}
        </>
    )
}

export default PokemonModal