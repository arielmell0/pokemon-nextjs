import { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [listPokemons, setListPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    async function getPokemons() {
        try {
          const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(() => {
        getPokemons()

        setLoading(false)
    }, [])

    return (
        <></>
    )
}

export default Pokemon;