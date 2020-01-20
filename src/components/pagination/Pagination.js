import React from 'react'
import './Pagination.scss'

const Pagination = ({pokemonsPerPage, totalPokemons, paginate}) => {
    const pageNumber = []

    // Get numbers of pages
    for(let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++){
        pageNumber.push(i)
    }
    
    return (
        <ul className='pagination-list'>
            {pageNumber.map(p => (
                <li key={p} className='pagination-item'>
                    <span onClick={() => paginate(p)}>{p}</span>
                </li>
            ))}
        </ul>
    )
}

export default Pagination