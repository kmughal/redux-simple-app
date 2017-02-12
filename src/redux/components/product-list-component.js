import React from "react"

export const ProductList = (props) => {
    let orderBy = (event) => props.orderBy(event.target.dataset.key);
    return <div>
        {props.products.length === 0 && <div className="alert alert-info text-center">No Products !</div>}
        {((props.products.length > 0) && (
            <table id="product-list" className="table table-bordered">
            <thead>
                <tr>
                    <th>Actions</th>
                    <th data-key="name"  onClick={orderBy}>Name {props.orderColumnName === "name" ? ` - sorted ${props.orderDir}` : "" }</th>
                    <th data-key="desc" onClick={orderBy}>Description  {props.orderColumnName === "desc" ? ` - sorted ${props.orderDir}` : "" }</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((item, index) => {
                    return <tr className="product-list" key={index}>
                        <td><a href="#" onClick={() => { props.deleteItem(item) }}>Delete</a></td>
                        <td>{item.name}</td>
                        <td>{item.desc} </td>
                    </tr>
                })}
            </tbody>
        </table>
        ))}

    </div>;
}