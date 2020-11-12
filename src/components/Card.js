import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 4%;
    position: relative;
    z-index: 0;
    padding: 2%;
    &:hover {
            top: 0;
            left: 0;
            width: 25%;
            margin: 0;
            z-index: 1;
            transition-delay: 2s;
            transition: all 1s ease-in-out;
        }
    img {
        width: 100%;
    }
    transition-delay: 2s;
    transition: all 1s ease-in-out;
`;


const Card = (props) => {
    return (
        <Container>
            <div>  
                <h4>{props.name}</h4>
                <h5>Artist: {props.artist}</h5>
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