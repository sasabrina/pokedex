import React from 'react'
import './PokemonCard.scss'

const PokemonCard = ({pokeData, expandPokemon}) => {
    const {name, sprites, id} = pokeData

    return(
        <li className='card' onClick={()=> expandPokemon(id)}>
            <p>{name}</p>
            <figure>
                <img src={sprites.front_default} alt=""/>
            </figure>
        </li>
    )
}

export default PokemonCard