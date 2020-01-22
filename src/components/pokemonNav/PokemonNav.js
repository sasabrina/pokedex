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
    let {options} = items
    return(
    <>
    <ul className='pokemon_nav'>
        <li><Link to='/'>Home</Link></li>
        <li className='submenu'>{langItem}
            <ul className='sublist'>
                {options && options.map(({value, item}, i) => (<li key={i} onClick={()=>toggle(value)}>{item}</li>))}
            </ul>
        </li>
    </ul>
    </>
    )
}

export default PokemonNav