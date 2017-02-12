import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import { ProductList } from "../components/product-list-component"
import ProductInputPanel from "../components/product-input-panel"
import * as actions from "../actions/index"

const App = (props) => {
    let {actions, products, orderBy,orderDir,orderColumnName} = props;
    return <div>
        <ProductInputPanel addNewProduct={actions.addItem} />
        <ProductList products={products} deleteItem={actions.deleteItem}
            orderBy={actions.orderBy} orderColumnName = {orderColumnName} orderDir = {orderDir} />
    </div>
}

const mapStateToProps = (state, ownProps) => {
    let { products, orderColumnName, orderDir} = state.product;
    return {
        products, orderColumnName, orderDir
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);