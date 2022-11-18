import styled from 'styled-components'

export const DivCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 10vw;
    height: 30vh;

    background-color: white;

    border: 2px solid black;

    margin: 4%;
`

export const DivText = styled.div`
    display: flex;

    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;
    height: 50%;

    background-color: black;
    color: white;
`

export const DivImg = styled.img`
    display: flex;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50%;

    background-image: url(${props => props.img || null})
`