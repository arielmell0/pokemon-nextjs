import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Primitives/Card";

const Pokemon = () => {
  const { query, isReady } = useRouter()
  const id = query.id
  const [listPokemons, setListPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!isReady) return

    const getPokemons = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        setLoading(false)

        return response
      } catch (error) {
        console.error(error)
      }
    };

    getPokemons()
      .then(response => setListPokemons(response.data))
  }, [isReady]);

  return (
    <>
      { 
        loading ?
        <div>'loading'</div> :
        <Card text={listPokemons.name} img={listPokemons.sprites.front_default}/>
      }
      <button onClick={() => console.log(listPokemons)}>clique aqui</button>
    </>
  );
};

export default Pokemon;
