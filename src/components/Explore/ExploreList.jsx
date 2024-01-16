import React from "react";
import { Explore } from "./Explore";
export class ExploreList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            <div className="explore-container">
            <div className="photo-gallery">
            {this.props.ExploreList.map((e, index) => (
                <Explore 
                  imageURL={e.imageURL}
                  imageAlt={e.imageAlt}
                  key={e.id}
                  likes={e.likes}
                  message={e.message}
                />
                ))}
            </div>
            </div>
            </div>
        );
    }
}



