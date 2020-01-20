import React from 'react'
import {Link} from 'react-router-dom'
import './containers.scss'

const Home = () => {

    return (
        <div className='main-container'>
            <h1>nav</h1>
            <Link to='/pokedex'>Go to pokedex</Link>
        </div>
    )
}

export default Home