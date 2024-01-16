import React from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import './Explore.css'
export class Explore extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
           
                <div className="pic place">
                <img src={this.props.imageURL} alt={this.props.imageAlt}  />
                    <div className="textt">
                        <br/><br/><br/>
                        <p className="pic1"><BsFillSuitHeartFill color="white" size={25}/>{this.props.likes}</p>
                        <p className="pic2"><FiMessageCircle color="white" size={25}/> {this.props.message}</p>
                    </div>
                </div>
            </div>

        );
    }
}