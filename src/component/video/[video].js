import React from "react";
import { actionadvanture } from "../../db/actionadvanture";
import { RPG } from "../../db/RPG";
import { JRPG } from "../../db/JRPG";
import { FPS } from "../../db/FPS";
import { useParams } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import "./video.css"

var gamename=""
var gamedec=""

function Video(){

    
    
 
    const params =useParams();
    console.log(params)
    const videoid =params.videoid;

    if(params.cat==="action"){

        const name = actionadvanture.filter((video)=>video.videoid === videoid)
         gamename =name[0].name
         gamedec=name[0].dec
    }else if(params.cat==="RPG"){
        const name = RPG.filter((video)=>video.videoid === videoid)
         gamename =name[0].name
         gamedec=name[0].dec

    } if(params.cat==="JRPG"){
        const name = JRPG.filter((video)=>video.videoid === videoid)
         gamename =name[0].name
         gamedec=name[0].dec
    }   
    if(params.cat==="FPS"){
        const name = FPS.filter((video)=>video.videoid === videoid)
         gamename =name[0].name
         gamedec=name[0].dec
    }




    return (

<div className="video">
    <div className="navbar1"><NavBar/></div>
     <iframe
          id="ytplayer"
          title={gamename}
          type="text/html"
          height="720"
          width="1080"
          src={`https://www.youtube.com/embed/${videoid}?autoplay=0&origin=http://example.com&controls=1&rel=1`}
        
    ></iframe>
    
        <h1>{gamename}</h1>
        <p>{gamedec}</p>
       
        <Footer/>
        </div>

    )
}

export default Video;