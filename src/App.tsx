import React from "react"
import "../src/css/App.css"
import Home from "./pages/Home"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="App_center" style={{ 
                backgroundImage: `url("https://www.eastwestbpo.com/wp/wp-content/uploads/2016/05/background.png")` 
            }}>
                    <Home />
                </div>
            </header>   
        </div>
    )
}

export default App
