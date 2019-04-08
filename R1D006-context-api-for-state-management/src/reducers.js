export const initialState = {
    menuCollapsed: false
  };

 // define reducers here 
 export const homeReducer = (state, action) => {
    switch (action.type) {
      case 'COLLAPSE_MENU':
        return {
          ...state,
          menuCollapsed: action.payload
        };
        
      default:
        return state;
    }
  };