export default (state = [], action) => {
  const currentQuote = state.find( quote => quote.id === action.quoteId)
  let updatedQuote
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "UPVOTE_QUOTE":
      // debugger;
      updatedQuote = {...currentQuote, votes: currentQuote.votes + 1}
      return [...state.slice(0, state.indexOf(currentQuote)), updatedQuote, ...state.slice(state.indexOf(currentQuote) + 1)];
    case "DOWNVOTE_QUOTE":
      if (currentQuote.votes > 0) {
        updatedQuote = {...currentQuote, votes: currentQuote.votes - 1}
        return [...state.slice(0, state.indexOf(currentQuote)), updatedQuote, ...state.slice(state.indexOf(currentQuote) + 1)];
      }
      else {
        return state
      }
    case "REMOVE_QUOTE":
      return [...state.slice(0, state.indexOf(currentQuote)), ...state.slice(state.indexOf(currentQuote) + 1)];
    default:
      return state;
  }
}
