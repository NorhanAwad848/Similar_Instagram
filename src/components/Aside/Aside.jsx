import React from "react";
export class Aside extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
           
                <div className="follow">
                     <img src={this.props.imageURL} alt={this.props.imageAlt} /> 
                     <h5>{this.props.name}</h5>
                     <p>{this.props.phrase} <a href="#"> follow</a></p>
                </div>
        );
    }
}