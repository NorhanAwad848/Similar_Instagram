import React from "react";
import { Real } from "./Real";
import './Real.css'
export class Reallist extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
             
            {this.props.Reallist.map((v, index) => (
                <Real 
                videoUrl={v.videoUrl}
                  key={v.id}
                />
               
                ))}
                
            </div>
            
        );
    }
}



