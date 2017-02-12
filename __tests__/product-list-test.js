import React from "react"
import { mount } from "enzyme"
import { ProductList } from "../src/redux/components/product-list-component"

test("it should display empty message when no products are provided", () => {
    const productList = mount(<ProductList products={[]} />);
    expect(productList.text()).toContain("No Products !");
});

test("it should display products when product list is passed", () => {
    const productList = mount(<ProductList products={
        [{ name: "product 1", desc: "desc 1" }, { name: "product 1", desc: "desc 1" }]
    } />);
    expect(productList.find("#product-list tbody tr").length).toBe(2);
});