import React from 'react';
import './App.css';
import { actionadvanture } from "../src/db/actionadvanture"
import { RPG } from '../src/db/RPG';
import Card from './component/card';
import { JRPG } from './db/JRPG';
import { FPS } from './db/FPS';
import NavBar from './component/navbar/navbar';
import Footer from './component/footer/footer';



 function App() {

   

    return <div>
      <NavBar/>
      <div className='title'>
      <h1>Action-Advanture</h1>
      </div>
    <div className='container' >
       {actionadvanture.map((game) => (
        <div className='card'>
      <Card card={game}/>
       </div>
      ))} 

      
    </div>
    <div className='title'>
      <h1>RPG</h1>
      <div className='container' >
       {RPG.map((game) => (
        <div className='card'>
      <Card card={game}/>
       </div>
      ))} 

      
    </div>

      </div>

      <div className='title'>
      <h1>JRPG</h1>
      </div>
    <div className='container' >
       {JRPG.map((game) => (
        <div className='card'>
      <Card card={game}/>
       </div>
      ))} 
      </div>

      <div className='title'>
      <h1>FPS</h1>
      </div>
    <div className='container' >
       {FPS.map((game) => (
        <div className='card'>
      <Card card={game}/>
       </div>
      ))} 
      </div>


    <Footer/>
        </div>


  
}


export default App;