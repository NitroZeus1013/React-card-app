import React from "react";
import Hello from "./classCompo";
import Timer from "./functionalCompo";
import Card from './card'
class App extends React.Component{
  
    render(){
        return(
      <div>
        <Card />
      </div>   
  );
        }
}

export default App;