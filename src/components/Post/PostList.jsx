import React from "react";
import { Post } from "./Post";


export class PostList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            {this.props.postList.map((post, index) => (
                <Post
                  name={post.name}
                  imageURL={post.imageURL}
                  imageAlt={post.imageAlt}
                  key={post.id}
                  likes={post.likes}
                  Component={post.Component}
                  duration={post.duration}
                />
                ))}
            </div>
        );
    }
}