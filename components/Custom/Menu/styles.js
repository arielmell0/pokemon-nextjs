import styled from 'styled-components'

const MenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-self: flex-start;

  width: 100vw;
  height: 10vh;

  background-color: black;
`

const Input = styled.input`
  width: 40%;
  height: 40%;

  ::placeholder {
    text-align: center;
  }
`

const Title = styled.div`
  justify-self: flex-start;
`

export { MenuBar, Input, Title }