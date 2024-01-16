import './App.css';
import React from 'react';
import { Nav } from './Shared/Nav';
import pro from './assets/images/profile.jpg';
import post from './assets/images/post1.jpg';
import { Outlet } from 'react-router-dom';
function App() {
  let imageURL=pro;
  let image=post;
  let imageAlt="Eng:Norhan Awad";
  return (
    <div >
       <Nav imageURL={imageURL}  imageAlt={imageAlt}/>
       <Outlet/>  
    </div>
  );
}

export default App;
