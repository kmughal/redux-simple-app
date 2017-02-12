import React from "react"

const ProductInputPanel = (props) => {
    let productName = null, productDesc = null;

    let addName = () => {
        props.addNewProduct({ name: productName.value, desc: productDesc.value });
        productName.value = "";
        productDesc.value = "";
    }

    return <div className="form">
        <h2>New Product</h2>
        <div className="form-group">
            <label>Name:</label>
            <input type="text"
                className="form-control"
                placeholder="enter product name"
                ref={(input) => { productName = input; }} />
        </div>

        <div className="form-group">
            <label>Description:</label>
            <textarea
                className="form-control"
                placeholder="enter product description"
                ref={input => productDesc = input}
            ></textarea>
        </div>
        <div className="form-group">
            <button className="btn btn-primary" onClick={addName}>Add</button>
        </div>
    </div>
}

export default ProductInputPanel;