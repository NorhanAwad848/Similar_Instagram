import React from "react";
import { FiHeart } from 'react-icons/fi';
import {FaHeart} from 'react-icons/fa'
import {FiMessageCircle} from 'react-icons/fi';
import {FiSend} from 'react-icons/fi';
import {BsBookmark} from 'react-icons/bs';
import{BsBookmarkFill} from 'react-icons/bs';
import './Real.css'
export class Real extends React.Component{
    state = { islike: true,isnote:true, isOnline: true };
    constructor(props){
        super(props);
    }
    render(){
        return(
          <div>
             <div className="pcontainer">
            <div className="card">
            <div className="account">
          <video src={this.props.videoUrl} className="img-post" muted controls autoPlay></video>
          <div className="iconcontiner">
          <h1  onClick={() => {
            this.setState({ islike: !this.state.islike });
          }}>
            {this.state.islike ? (
          <FiHeart color="white" size={30} />):(<FaHeart color="red" size={25}/>)}</h1>
          
          <FiMessageCircle color="white" size={30} />
          <h1  onClick={() => {
            this.setState({ isnote: !this.state.isnote });
          }}>
            {this.state.isnote ? (
          <BsBookmark color="white" size={30} /> ):(<BsBookmarkFill color="white" size={25}/>)}</h1>
          <FiSend  color="white" size={30} />
          </div>
          </div>
          </div>
          </div>
          <br/><br/><br/><br/><br/>
          </div>
        );
    }


}