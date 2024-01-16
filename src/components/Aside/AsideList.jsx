import React from "react";
import { Aside } from "./Aside";
import './Aside.css';

export class AsideList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <h4 className="head">Suggestions for you <a href="#"  className="lhead"> See All</a></h4>
            {this.props.AsideList.map((aside, index) => (
                <Aside
                  name={aside.name}
                  imageURL={aside.imageURL}
                  imageAlt={aside.imageAlt}
                  key={aside.id}
                  phrase={aside.phrase}
                />
                ))}
            </div>
        );
    }
}