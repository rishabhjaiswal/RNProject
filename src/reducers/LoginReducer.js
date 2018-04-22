
const initialState = {};

export function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case "": {
      return Object.assign({}, state, {error: false});
    }
    
    default: {
      return state;
    }
  }
}
