import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../actions'

const Header = (props) => {
    return (
        <>
            <h1>Get Magic the Gathering Cards</h1>
            <button onClick={props.getCards}>Get Cards</button>
        </>
    )
}


const mapStateToProps = (state) => {
    return {        
        cards: state.cards,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCards })(Header);