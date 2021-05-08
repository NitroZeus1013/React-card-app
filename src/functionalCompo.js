import React from "react";

function Timer(){
    const element = (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    return (element);
}

export default Timer;