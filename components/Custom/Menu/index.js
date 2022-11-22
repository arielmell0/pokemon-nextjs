import { MenuBar, Input, Title } from './styles.js'

const Menu = () => {
  return (
    <MenuBar>
      <Title>
        Poke Logo 
      </Title>

      <Input placeholder='Search a pokemon...' />
    </MenuBar>
  )
}

export default Menu