import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 2%;
`;


const Card = (props) => {
    return (
        <Container>
            <div>  
                <h4>{props.name}</h4>
                <h5>{props.artist}</h5>
                <p>Rarity: {props.rarity}</p>
                <p>Set: {props.setName}</p>
            </div>
           

            <img src={props.image_url} alt={props.id}/>
        </Container>
    )
}

export default Card;