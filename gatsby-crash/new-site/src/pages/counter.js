import React from "react"
import Link from "gatsby-link"

class Counter extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    

    function addCount(){
        this.setState(this.state.count + 1)
    }

    function minusCount(){
        this.setState(this.state.count - 1)
    }
}

    render(){
        return (
        <div>
            <h1>Counter</h1>
            <p>current count: {this.state.count}</p>
            <button onClick={addCount}>plus</button>
            <button onClick={minusCount}>minus</button>
        </div>
        )
    }
}