import React from "react"
import ReactDom from "react-dom"
import App from "./App.js"

//functional component => Stateless or Display Component, must be in div to return multiple
function HelloWorld(){
    return(
        <div>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>    

    )
}

//jsx

//what to render, where to render
ReactDom.render(<App/>, document.getElementById("root"))