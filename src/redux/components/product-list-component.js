import React from "react"

export const ProductList = (props) => {
    return <div>
        {props.products.length === 0 && <div className="alert alert-info text-center">No Products !</div>}
        {props.products.map((item, index) => {
            return <div key={index}> [<a href="#" onClick={() => { props.deleteItem(item) }}>Delete</a>] {index + 1} . {item.name}  - {item.desc} </div>
        })}
    </div>;
}