import React from "react";

class Counter extends React.Component{

    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

    render(){
        return(
            <div>
                Counter : {this.state.counter} 
                <button onClick={()=>this.setState({counter: this.state.counter + 1})}>
                    Increase
                </button>
                <button onClick={()=>this.setState({counter: this.state.counter - 1})}>
                    Decrease
                </button>
            </div>
        )
    }
}

export default Counter