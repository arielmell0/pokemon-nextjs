import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;

    width: 100vw;
    height: 100vh;
`

export const DivCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 10%;
    height: 30%;

    background-color: white;

    border: 2px solid black;
`

export const DivText = styled.div`
    display: flex;

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