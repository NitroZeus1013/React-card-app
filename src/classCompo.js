import React from "react";

class Hello extends React.Component{
      
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }

    render(){
        return(
            <div>
                <div>{this.state.count}</div>
                <button>Increament</button>
            </div>
        )
    }
}

export default Hello