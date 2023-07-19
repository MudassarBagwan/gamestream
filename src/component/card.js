import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


import './card.css'

const Card = (gamecat) => {

    const {name,imgUrl,videoid,cat} =gamecat.card;
    console.log(videoid)
    return (


        <div className='card'> 
         <motion.div
               
                whileHover={{ scale: 1.12 }}
            >
         <Link to={`/video/${cat}/${videoid}`}>
        <a>
        <img alt={name} src={imgUrl}   height={300} width={300}/>
        <h3>{name} </h3>

        
        
        </a>

        
         </Link>
         </motion.div>
        
        </div>

       
       
  
    );
  }
  
  export default Card;

