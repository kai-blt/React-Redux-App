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
            </div>
            <div>                
                <img src={props.image_url} alt={props.id}/>
            </div>
            <div>
               
            <p>Rarity: {props.rarity}</p>
                <p>Set: {props.setName}</p>
            </div>

        </Container>
    )
}

export default Card;