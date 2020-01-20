import React, { useState, useEffect } from 'react'
import { Pokemons } from '../components/index'
import {fetchPokemons} from '../helpers/index'
import './containers.scss'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    
    // Get pokemons from server
    const getPokemons = () => {
        setLoading(true)
        fetchPokemons(setPokemons)
        setLoading(false)
    }
    
    useEffect(() => {
        getPokemons()

    }, [])

    return (
        <div className='main-container'>
            <Pokemons pokemons={pokemons} loading={loading}/>
        </div>
    )
}

export default Pokedex