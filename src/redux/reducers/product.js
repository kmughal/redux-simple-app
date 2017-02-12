import * as actions from "../actions/index"

let orderList = (list, column, dir) => {
    return Array.from(list).sort((a, b) => {
        if (dir === "asc")
            return String(a[column]).localeCompare(String(b[column]));
        else
            return String(b[column]).localeCompare(String(a[column]));
    });
}

let initialState = { products: [], orderColumnName: "name", orderDir: "asc" };
export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_ITEM:
            return Object.assign({}, { ["products"]: [...state.products, action.item] }, { orderColumnName: state.orderColumnName } , {orderDir : state.orderDir});
        case actions.REMOVE_ITEM:
           let { products , orderColumnName,orderDir} = state;
            return { products: products.filter(v => v != action.item) , orderColumnName,orderDir};
        case actions.ORDER_BY:
             let sortDir = state.orderDir;
            ((action.columnName === state.orderColumnName) && (sortDir = sortDir === "asc" ? "desc" : "asc"));
            ((action.columnName !== state.orderColumnName) && (sortDir = "asc"));
            return Object.assign({},{ products: orderList(state.products, action.columnName, sortDir), orderColumnName: action.columnName, orderDir : sortDir });
        default:
            return state;
    }
}

