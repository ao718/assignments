import React from "react"
import Navbar from "./Navbar.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Main from "./Main.js"

import "./styles.css"

function App(){
    return(
        <div className="app-container">
            <Navbar/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App