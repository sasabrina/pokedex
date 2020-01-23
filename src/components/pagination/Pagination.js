import React, { useState } from 'react'
import './Pagination.scss'

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
    const [active, setActive] = useState(false)
    const pageNumber = []

    // Get numbers of pages
    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pageNumber.push(i)
    }
    
    const toggleActive = key => {
        setActive(!active)
        paginate(key)
    }

    return (
        <ul className='pagination-list'>
            {pageNumber.map(p => (
                <li key={p} >
                    <span className={`pagination-item ${active ? 'active' : ''}`} onClick={() => toggleActive(p)}>{p}</span>
                </li>
            ))}
        </ul>
    )
}

export default Pagination