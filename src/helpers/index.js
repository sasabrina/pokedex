const fetchPokemons = async setter => {
    let pokemons = []
    for(let i = 1; i <= 50; i++){
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then(response => response.json())
        .then(response => {
            const {name, id, sprites, abilities} = response
            pokemons.push({
                name: name,
                id: id,
                sprites: sprites,
                abilities: abilities
            })
        })
        .catch(err => console.log(err))
    }

    setter(pokemons)
}

const fetchAbilities = (arr, setter) => {
    Promise.all(
        arr.map( a =>{
            return fetch(a.ability.url)
            .then(res => res.json())
            .then(res => {
                let {names, flavor_text_entries} = res;
                return{
                    en: {name: names[2].name, flavor_text: flavor_text_entries[21].flavor_text},
                    es: {name: names[4].name, flavor_text: flavor_text_entries[4].flavor_text}
                }
            })
        })
    )
    .then(data => setter(data))
    
}

export {fetchPokemons, fetchAbilities}