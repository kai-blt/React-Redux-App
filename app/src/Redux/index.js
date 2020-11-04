//State to props mapping for Redux!

export const mapStateToProps = (state) => {
    return {        
        cards: state.cards,
        isFetching: state.isFetching,
        error: state.error
    }
}
