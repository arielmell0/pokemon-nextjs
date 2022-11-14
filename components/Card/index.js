import { Container, DivCard, DivText, DivImg } from './styles'

const Card = (props) => {
    return (
        <Container>
            <DivCard>
                <DivImg src={props.img}/>
                <DivText>{props.text}</DivText>
            </DivCard>
        </Container>
    )
}

export default Card