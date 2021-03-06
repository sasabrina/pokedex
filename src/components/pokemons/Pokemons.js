import React, {useState} from 'react'
import Navigation from '../../containers/Navigation'
import { Pagination, PokemonCard, Modal, PokemonModal } from '../index'
import './Pokemons.scss'

const Pokemons = ({pokemons, lang}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(4);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentPokemon, setCurrentPokemon] = useState(null);

    // Get current pokemons
    const indexOfLastPkmn = currentPage * pokemonsPerPage;
    const indexOfFirstPkmn = indexOfLastPkmn - pokemonsPerPage;
    const currentPkmns = pokemons.slice(indexOfFirstPkmn, indexOfLastPkmn);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const toggleModal = () => {
        setModalOpen(!modalOpen)
        setCurrentPokemon(null)
    }

    const getCurrentPokemon = str => {
        setCurrentPokemon(pokemons.find(p => str === p.id))
        setModalOpen(true)
    }

    return(
        <>
        <section>
            <ul className='pokemons_container'>
                {currentPkmns.map((p, i) => <PokemonCard key={i} pokeData={p}  expandPokemon={getCurrentPokemon}/>)}
            </ul>

            <Modal isOpen={modalOpen} toggle={toggleModal}>
                {currentPokemon && lang && <PokemonModal {...currentPokemon} lang={lang}/>}
            </Modal>
        </section>
        
        <Navigation clssnm={'pag_nav'}>
            <Pagination pokemonsPerPage={pokemonsPerPage} totalPokemons={pokemons.length} paginate={paginate}/>
        </Navigation>
        </>
    )
}

export default Pokemons