import React, {useState, useEffect} from 'react'

let data1 = []

const PokemonModal = ({name, sprites, abilities}) => {
    const [abilitiesData, setAbilitiesData] = useState([])

    const fetchAbylity = async url => {
        await fetch(url)
        .then(res => res.json())
        .then(res => {
            const {names, flavor_text_entries} = res
            let data = {
                en: {name: names[2].name, flavor_text: flavor_text_entries[21].flavor_text},
                es: {name: names[4].name, flavor_text: flavor_text_entries[4].flavor_text}
            }
            
            data1.push(data)
        })
    }
    const getAbilities = () =>{
        abilities.map(a => fetchAbylity(a.ability.url))
    }

    useEffect(()=> {
        getAbilities()
        setAbilitiesData(data1)
    }, [])

    {console.log(abilitiesData)}

    // let ablitiesName = abilities.map((a, i) => (<p key={i}>{a.ability.name}</p>))
    return(
        <>
            <h2>{name}</h2>
            <img src={sprites.front_default} alt=""/>

            {/* {ablitiesName} */}
        </>
    )
}

export default PokemonModal