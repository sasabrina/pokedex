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
    
    console.log(abilitiesData)
    return(
        <>
            <h2 className='pkmn_modal_title'>{name}</h2> 
            <figure className='pkmn_modal_fig'>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
            </figure>

            <div className='pkmn_modal_abilities'>
                {abilitiesData && abilitiesData.map((a, i) => (
                    <p key={i}><span>{a.es.name}</span> {a.es.flavor_text}</p>
                    
                ))}
            </div>
        </>
    )
}

export default PokemonModal