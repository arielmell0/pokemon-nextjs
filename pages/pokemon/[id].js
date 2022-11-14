import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";

const Pokemon = () => {
  const router = useRouter()
  const id = router.query.id
  const [listPokemons, setListPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        return response;
      } catch (error) {
        console.error(error);
      }
    };

    getPokemons()
      .then((response) => setListPokemons(response.data));

    setLoading(false);
  }, []);

  return (
    <>
      <Card text={listPokemons.name} />
      <button onClick={() => console.log(listPokemons)}>console aqui</button>
    </>
  );
};

export default Pokemon;
