import React from "react";
import './Status.css'
export class Status extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
            <div className="container">
                <div className="images">
                <img src={this.props.imageURL} alt={this.props.imageAlt} className="status"/>
                <h3> {this.props.name}</h3>
                </div>
            </div>
            </React.Fragment>
           
        );
    }
}