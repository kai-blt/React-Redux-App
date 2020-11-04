import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getCards, searchCards } from '../Redux/actions'
import { mapStateToProps } from '../Redux'
import styled from 'styled-components'


const HeaderContainer = styled.div`
    margin: 4% 0;
`;

const Header = (props) => {
    const [searchValue, setSearchValue] = useState('');


    //Handlers
    const updateSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = (e) => {        
        e.preventDefault();
        props.searchCards(searchValue)
    }

    const handleGetCards = (e) => {
        e.preventDefault();
        props.getCards();
    }

    //Run get cards on init
    useEffect(() => {
        props.getCards();
    }, [])


    return (
        <HeaderContainer>
            <h1>Get Magic the Gathering Cards</h1>
            <form>
                <label>Search by Card Title&nbsp;
                    <input type="text" value={searchValue} onChange={updateSearch}></input>
                </label> 
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleGetCards}>Get Random Cards</button>               
            </form>            
        </HeaderContainer>
    )
}



export default connect(mapStateToProps, { getCards, searchCards })(Header);