import React, {useState, useEffect} from 'react'
import {fetchAbilities} from '../../helpers/index'
import './PokemonModal.scss'

const PokemonModal = ({name, id, abilities, lang}) => {
    const [abilitiesData, setAbilitiesData] = useState([])

    const getAbilities = () =>{
        fetchAbilities(abilities, setAbilitiesData)
    }
    
    useEffect(()=> {
        getAbilities()
    }, [])
    
    let language = abilitiesData.flat().filter(({id}) => id === lang).map(({options})=> options).flat()
    
    return(
        <>
            <h2 className='pkmn_modal_title'>{name}</h2> 
            <figure className='pkmn_modal_fig'>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
            </figure>

            <div className='pkmn_modal_abilities'>
                {abilitiesData && language.map((a, i) => (
                    <p key={i}><span>{a.name}</span> {a.flavor_text}</p>
                ))}
            </div>
        </>
    )
}

export default PokemonModal