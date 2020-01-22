import React, { useState, useEffect } from 'react'
import { fetchPokemons } from '../helpers/index'
import { Pokemons, PokemonNav } from '../components/index'
import Header from './Header'
import Navigation from './Navigation'
import './containers.scss'

const Pokedex = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [language, setLanguage] = useState('es')

    // Get pokemons from server
    const getPokemons = () => {
        setLoading(true)
        fetchPokemons(setPokemons)
        setLoading(false)
    }
    
    const toggleLanguage = key => setLanguage(key)
    
    useEffect(() => {
        getPokemons()
    }, [])

    
    console.log(pokemons)    
    
    return (
        <>
        <Header title={'Pokedex'} clssnm={'pokedex_header'}>
            <Navigation className={'pokedex_nav'}>
                <PokemonNav language={language} toggle={toggleLanguage}/>
            </Navigation>
        </Header>
        <div className='main-container pokedex'>
            <Pokemons pokemons={pokemons} loading={loading} lang={language}/>
        </div>
        </>
    )
}

export default Pokedex