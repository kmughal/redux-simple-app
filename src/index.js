import React from "react"
import { render } from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"

import App from "./redux/containers/app"
import Api from "./redux/middleware/api"
import { rootReducer } from "./redux/reducers/index"

render(<Provider store={createStore(rootReducer,applyMiddleware(Api))}>
    <App />
</Provider>, document.getElementById("app"))

