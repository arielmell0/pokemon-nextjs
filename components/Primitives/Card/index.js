import { Container, DivCard, DivText, DivImg } from './styles'

const Card = (props) => {
    return (
            <DivCard>
                <DivImg src={props.img}/>
                <DivText>{props.text}</DivText>
            </DivCard>
    )
}

export default Card