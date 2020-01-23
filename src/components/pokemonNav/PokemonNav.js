import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { languages } from '../../helpers/index'
import './PokemonNav.scss'

const PokemonNav = ({language, toggle}) =>{
    const [items, setItems] = useState([])

    let subItems = languages.find(({id}) => id === language)
    
    const getLanguages = () => setItems(subItems)
    
    useEffect(() => {
        getLanguages()
    })

    let langItem = language === "en" ? "Language" : "Idioma"
    let linkName = language === "en" ? "Home" : "Inicio"
    let {options} = items

    return(
    <ul className='pokemon_nav'>
        <li><Link to='/'>{linkName}</Link></li>
        <li>
            <p>{langItem}: 
                {options && options.map(({value, item}, i) => (<span key={i} onClick={()=>toggle(value)}>{item}</span>))}
            </p>
        </li>
    </ul>
    )
}

export default PokemonNav