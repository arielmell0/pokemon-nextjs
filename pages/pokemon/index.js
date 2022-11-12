import { useState, useEffect } from 'react'
import axios from 'axios'

const Pokemon = () => {
    const [listPokemons, setListPokemons] = useState()
    const [loading, setLoading] = useState(true)

    const getPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')

        return response
      } catch (error) {
        console.error(error);
      }
    }    

    useEffect(() => {
      getPokemons()
        .then(response => setListPokemons(response.data.results))

      setLoading(false)
    }, [])

    return (
        <>
          <div>{ loading ? 'loading' : 'loaded'}</div>
          <Card></Card>
        </>
    )
}

export default Pokemon;