import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card">
                <div className="card-data">
                <div id="header">This is My card.</div>
                <div id="content">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione modi at blanditiis doloribus, est quisquam ad necessitatibus nam vitae nulla?</div>
            <div className="stats">
                <div>
                    <h3>10k+</h3>
                    <h5>Companies</h5>
                </div>
                <div>
                    <h3>314</h3>
                    <h5>Templates</h5>
                </div>
                <div>
                    <h3>12M+</h3>
                    <h5>Queries</h5>
                </div>
                </div>

            </div>
                
                <div className="avatar">

                </div>
            </div>
            
        );
    }
}

export default Card;