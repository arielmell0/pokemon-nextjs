import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../primitives/Card";
import loading from '../../assets/svg/loading.svg'

const PokemonCard = (props) => {
  const [listPokemons, setListPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
        setLoading(false)

        return response
      } catch (error) {
        console.error(error)
      }
    };

    getPokemons()
      .then(response => setListPokemons(response.data))
  }, []);

  return (
    <>
      { loading ?
        <div>{loading}</div> :
        <Card text={listPokemons.name.charAt(0).toUpperCase() + listPokemons.name.slice(1)} img={listPokemons.sprites.front_default}/>
      }
    </>
  );
};

export default PokemonCard;