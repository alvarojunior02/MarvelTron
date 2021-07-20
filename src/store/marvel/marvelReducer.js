const INITIAL_STATE = {
  characters: [],
  errors: [],
};
  
const marvelReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
      };
    case 'GET_CHARACTERS_FAILURE':
      return {
        ...state,
        errors: action.payload,
      };
    case 'MORE_CHARACTERS':
      return {
        ...state,
        characters: action.payload,
      };
    default:
      return state;
  }
};
  
export default marvelReducer;