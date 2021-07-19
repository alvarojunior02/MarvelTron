const INITIAL_STATE = {
    data: [],
    errors: [],
  };
  
  const marvelReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_CHARACTERS':
        return {
          ...state,
          data: action.payload,
        };
      case 'GET_CHARACTERS_FAILURE':
        return {
          ...state,
          errors: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default marvelReducer;