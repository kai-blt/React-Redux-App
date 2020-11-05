import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../Redux';
import styled from 'styled-components';
import Card from './Card';




const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    border-radius: 10px;
    background-color: #222;
    justify-content: space-evenly;
    align-content: space-between;
    box-shadow: inset 20px 20px 40px #000;
    padding: 2%;
    margin: 2% 0;
`;

const FetchContainer = styled.p`
    font-size: 2rem;
    border-radius: 10px;
    padding: 2%;
    background-color: #222;
    width: 100%;

    img {        
        animation: rotate 1s linear infinite;
        @keyframes rotate {
            100% {
            transform: rotate(360deg);
            }
        }
    }
`;

const ErrorContainer = styled.p`
    font-size: 2rem;
    border-radius: 10px;
    padding: 1%;
    height: 5vh;
    background-color: red;
    width: 100%;
`;

const CardContainer = (props) => {
    return (
        <>
        <div>   
            { props.isFetching ? <FetchContainer><img src='/MTG Black.png' /><img src='/MTG Red.png' /><img src='/MTG Green.png' /><img src='/MTG Blue.png' /><img src='/MTG White.png' />&nbsp;One moment, getting cards...&nbsp;<img src='/MTG White.png' /><img src='/MTG Blue.png' /><img src='/MTG Green.png' /><img src='/MTG Red.png' /><img src='/MTG Black.png' /></FetchContainer> : null }
            { props.error ? <ErrorContainer>{`OOPS! We're sorry...${props.error}`}</ErrorContainer> : null }
        </div>
        <Container>            
            { console.log(props.cards.length) }
            { props.cards.length > 0 
                ? props.cards.filter(item => item.imageUrl !== undefined).map(item => {
                    return(
                        <Card 
                            key={item.id}
                            name={item.name}
                            artist={item.artist}
                            rarity={item.rarity}
                            setName={item.setName}
                            image_url={item.imageUrl}
                        />
                    )
                })
                : 'No cards found'
            }
        </Container>
        </>
    )
}

export default connect(mapStateToProps, {})(CardContainer);