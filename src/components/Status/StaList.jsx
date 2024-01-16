import React from "react";
import { Status } from "./Status";
import './Status.css'
export class StaList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
         
            <div className="set">
            {this.props.userList.map((statu, index) => (
                <Status
                  name={statu.name}
                  imageURL={statu.imageURL}
                  imageAlt={statu.imageAlt}
                  key={statu.id}
                />
                ))}
                <hr/>
            </div>
            
        );
    }
}