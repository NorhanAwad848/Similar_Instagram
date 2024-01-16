import React from "react";
import { StaList } from "../components/Status/StaList";
import { AsideList } from "../components/Aside/AsideList";
import { PostList } from "../components/Post/PostList";
import post5 from '../assets/images/post5.jpg';
import post6 from '../assets/images/post6.jpg';
import post7 from '../assets/images/post7.jpg';
import post8 from '../assets/images/post8.jpg';
import post from '../assets/images/post1.jpg';
import post2 from '../assets/images/post2.jpg';
import post3 from '../assets/images/post3.jpg';
import post4 from '../assets/images/post4.jpg';
let plist = [
    {
      id: "1",
      name: "Norhan ",
      imageURL: post,
      imageAlt: "Norhan  post",
      likes:"370",
      Component:"Nice Photo",
      duration:"12h",
      phrase:"Followed by yora4716,more +20....",
      message:"80"
    },
    {
      id: "2",
      name: "ELZero",
      imageURL: post2,
      imageAlt: "ElZero post",
      likes:"450",
      Component:"Two great wings",
      duration:"23h",
      phrase:"Followed by m_aboelsaad,more",
      message:"50"
    },
    {
      id: "3",
      name: "Batota ",
      imageURL: post3,
      imageAlt: "Batota  post",
      likes:"100",
      Component:"Magic",
      duration:"25m",
      phrase:"Followed by eman_elsefy,more..",
      message:"30"
    },
    {
      id: "4",
      name: "Tia",
      imageURL: post4,
      imageAlt: "Tia post",
      likes:"20",
      Component:"Freedom",
      duration:"1d",
      phrase:"Followed by yora4716,more +33..."
      ,message:"10"
    },
    {
      id: "5",
      name: "Lola",
      imageURL: post5,
      imageAlt: "lola post",
      likes:"35",
      Component:"King",
      duration:"3h",
      phrase:"Followed by yora4716,more +33..."
      ,message:"150"
    },
    {
      id: "6",
      name: "Mona",
      imageURL: post6,
      imageAlt: "Mona post",
      likes:"55",
      Component:"bedroom",
      duration:"1w",
      phrase:"Followed by yora4716,more +33..."
      ,message:"3",
    },
    {
      id: "7",
      name: "Omar",
      imageURL: post7,
      imageAlt: "Omar post",
      likes:"35",
      Component:"Dressing",
      duration:"1d",
      phrase:"Followed by yora4716,more +33..."
      ,message:"20",
    },
    {
      id: "8",
      name: "Nour",
      imageURL: post8,
      imageAlt: "Nour post",
      likes:"25",
      Component:"Kitchen",
      duration:"1d",
      phrase:"Followed by yora4716,more +33..."
      ,message:"30",
    },
    
  ];
  let list = [
    {
      id: "1",
      name: "Norhan ",
      imageURL: post,
      imageAlt: "Norhan  stuts",
    },
    {
      id: "2",
      name: "Batota",
      imageURL: post2,
      imageAlt: "Batota status",
    },
    {
      id: "3",
      name: "Omar ",
      imageURL: post3,
      imageAlt: "omar  status",
    },
    {
      id: "4",
      name: "Tia",
      imageURL: post4,
      imageAlt: "Tia status",
    },
    {
      id: "5",
      name: "Mohamed",
      imageURL: post4,
      imageAlt: "mohamed status",
    },
    
  ];
export const Home=()=>{
    return(
    <React.Fragment>
        <div className="state">
         <StaList userList={list}/>
          <br/>
        <AsideList AsideList={plist}/>
       </div>
       <div class="postt" >
        <PostList postList={plist}/>
       </div>
    </React.Fragment>
    );
};