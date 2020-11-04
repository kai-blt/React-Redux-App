import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from '../Redux';
import styled from 'styled-components';
import Card from './Card';


const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    border-radius: 10px;
    background-color: #555;
    justify-content: space-evenly;
    align-content: space-between;
    box-shadow: 20px 20px 40px #222;
    padding: 2%;
    margin: 2% 0;
`;

const CardContainer = (props) => {
    return (
        <>
        <div>   
            { props.isFetching 
                ? 'One moment, getting cards...'
                : null
            }
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