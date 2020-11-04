import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../Redux/actions'
import { mapStateToProps } from '../Redux'
import styled from 'styled-components'


const HeaderContainer = styled.div`
    margin: 4% 0;
`;

const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Get Magic the Gathering Cards</h1>
            <form>
                <label>Search
                    <input></input>
                </label>
                <label>Sort By Edition
                    <select>
                        <option>--Please Select One--</option>
                    </select>
                </label>
                <label>Sort By Color
                    <select>
                        <option>--Please Select One--</option>
                    </select>
                </label>
            </form>
            <button onClick={props.getCards}>Get Cards</button>
        </HeaderContainer>
    )
}



export default connect(mapStateToProps, { getCards })(Header);