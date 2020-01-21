import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import pokebanner from '../assets/pokebanner.png'
import pokeball_icon from '../assets/pokeball_icon.png'
import './containers.scss'

const Home = () => {

    return (
        <>
            <Header title={'Desafío Frávega'}>
                <figure>
                    <img src={pokebanner} alt='pokemon banner'/>
                </figure>
            </Header>
            <div className='main-container'>

                <Link to='/pokedex' className='home_goto'>
                    <figure>
                        <img src={pokeball_icon} alt='pokeball icon'/>
                    </figure>
                    <p>Go to Pokedex</p>
                </Link>
            </div>
        </>
    )
}

export default Home