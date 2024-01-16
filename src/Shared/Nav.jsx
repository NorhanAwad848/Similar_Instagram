import React from "react";
import "../App.css";
import logo from "../assets/images/logo.jpg"
import {IoHomeOutline} from 'react-icons/io5';
import {BiSearchAlt2} from 'react-icons/bi';
import {MdOutlineExplore} from 'react-icons/md';
import {BiMoviePlay} from 'react-icons/bi';
import {FiSend} from 'react-icons/fi';
import {AiOutlineNotification} from 'react-icons/ai';
import {BsPlusSquare}  from 'react-icons/bs';
import {IoIosArrowDropright} from 'react-icons/io';
import {BiMoon} from 'react-icons/bi';
import {GiSunflower} from 'react-icons/gi';
import { Link, useNavigate } from "react-router-dom";
export class Nav extends React.Component{
   
    constructor(props){
        super(props);
    }
    render(){
        return  (
            <div>  
                <nav className="sidebar ">
                    <header>
                    <div className="image-text">
                        <span className="image">
                            <img src={logo} alt=""/>
                        </span>
                        <div className="text header-text">
                            <span className="name ">Instagram</span>
                        </div>
                    </div>
                      <IoIosArrowDropright className="togg"  />
                    </header>
                    <div className="menu-bar">
                        <div className="menu">
                            <ul className="menu-links">
                                <li className="nav-link">
                                <Link to={'/Home'}>
                                  <IoHomeOutline className="icons" />
                                        <span className="text nav-text">Home</span> 
                                        </Link>
                                </li>
                                <li className="nav-link">
                                     <a href="#services"><BiSearchAlt2  className="icons"/> 
                                     <span className="text nav-text">Search</span>
                                     </a>
                                </li>
                                <li className="nav-link">
                                <Link to={'/Explore'}><MdOutlineExplore className="icons"/> 
                                        <span className="text nav-text">Explore</span>
                                        </Link>
                                </li>
                                <li className="nav-link">
                                <Link to={'/Real'}><BiMoviePlay  className="icons"/>
                                        <span className="text nav-text">Reals</span>
                                        </Link>
                                </li>
                                <li className="nav-link">
                                    <a href="#contact"><FiSend  className="icons" /> 
                                        <span className="text nav-text">Messages</span>
                                    </a>
                                </li>
                                <li className="nav-link"> 
                                <a href="#contact"><AiOutlineNotification className="icons" /> 
                                    <span className="text nav-text">Notification</span>
                                </a>
                                </li>
                                <li className="nav-link">
                                    <a href="#contact"> <BsPlusSquare className="icons"/> 
                                        <span className="text nav-text"> Create</span>
                                    </a>
                                </li>
                                <li className="nav-link">
                                    <a href="#contact">
                                        <img src={this.props.imageURL} alt={this.props.imageAlt} className="photo"/>
                                            <span className="text nav-text t">Profile</span>
                                </a>
                                </li>
                                <li className="nav-link">
                                <a href="">
                                    <span className="text nav-text tt">☰ More</span>
                                </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        ) ;
    }
}