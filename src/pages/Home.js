import React from 'react'
import {Link} from 'react-router-dom'
import { Header } from '../containers/index'
import pokebanner from '../assets/pokebanner.png'
import pokeball_icon from '../assets/pokeball_icon.png'

const Home = () => {

    return (
        <>
            <div className='home'>
                <Header title={'Desafío Frávega'} clssnm={'home_header'}>
                    <figure>
                        <img src={pokebanner} alt='pokemon banner'/>
                    </figure>
                </Header>

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