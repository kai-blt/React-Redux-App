import React from 'react'
import { connect } from 'react-redux'
import { getCards } from '../Redux/actions'
import { mapStateToProps } from '../Redux'

const Header = (props) => {
    return (
        <>
            <h1>Get Magic the Gathering Cards</h1>
            <button onClick={props.getCards}>Get Cards</button>
        </>
    )
}



export default connect(mapStateToProps, { getCards })(Header);