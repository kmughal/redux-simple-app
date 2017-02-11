import * as actions from "../actions/index"

export const ProductReducer = (state = [],action) => {
    switch(action.type) {
        case actions.ADD_ITEM :
            return [...state,action.item];
        case actions.REMOVE_ITEM :
            return state.filter(v=> v != action.item);
        default :
            return state;
    }
}

