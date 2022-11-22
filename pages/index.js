import PokemonCard from '../components/Custom/PokemonCard'
import styled from 'styled-components'
import Menu from '../components/Custom/Menu'

export default function Home() {
  const renderPokemons = () => {
    const maxPokemons = 100
    const arrayPokemons = []
    
    for(let i = 1; i <= 100; i++) {
      arrayPokemons.push(<PokemonCard key={i} id={i} />)
    }

    console.log(arrayPokemons)
    return arrayPokemons
  }

  return (
    <Container>
      <Menu />
      {
        renderPokemons()
      }
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;

  flex-direction: row;

  margin: 0;
  padding: 0;

  background-color: white;
`