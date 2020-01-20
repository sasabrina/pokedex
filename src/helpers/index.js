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

export {fetchPokemons}