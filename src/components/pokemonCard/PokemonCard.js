import React from 'react'
import './PokemonCard.scss'

const PokemonCard = ({pokeData, expandPokemon}) => {
    const {name, id} = pokeData

    return(
        <li className='card' onClick={()=> expandPokemon(id)}>
            <p>{name}</p>
            <figure>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt=""/>
            </figure>
        </li>
    )
}

export default PokemonCard