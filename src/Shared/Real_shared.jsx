import React from "react";
import { Reallist } from "../components/Real/Real_List";
import real1 from "../assets/videos/real1.mp4"
import real2 from "../assets/videos/real3.mp4"
import real3 from "../assets/videos/real4.mp4"

let Rlist = [
    {
      videoUrl: real3,
    },
    {
        videoUrl: real1,
    },
    {
        videoUrl: real2,
    },
  ];
export const Real_share=()=>{
    return(
    <React.Fragment>
      <div  >
        <Reallist Reallist={Rlist} />
       </div> 
    </React.Fragment>
    );
};