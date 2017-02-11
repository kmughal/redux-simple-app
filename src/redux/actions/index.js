const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const EDIT = "EDIT_ITEM";

const addItem = (item) => { return { type: ADD_ITEM, item } };
const deleteItem = (item) => { return { type: REMOVE_ITEM, item } };
const getItems = () => {
    return {
        ["Call Service"] : {
            entry : "service_name" ,
            types : ["GET_ITEM" , "GET_ITEM_SUCCESS" , "GET_ITEM_FAIL"]
        }
    }
}
export { ADD_ITEM, REMOVE_ITEM, addItem, deleteItem , getItems };