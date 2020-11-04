import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin: 2%;
`;


const Card = (props) => {
    return (
        <Container>
            <img src={props.image_url} alt={props.id}/>
        </Container>
    )
}

export default Card;