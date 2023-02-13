import React, {useState, useEffect} from 'react'
import Add from './Add'
import Viue from './Viue'
import axios from 'axios'
const Body = ({prodect, deletProdect}) => {


 
  
 
  return (
    <div className='container'>
       <Add/>
        <Viue prodect={prodect} deletProdect={deletProdect}/>
     
    
    </div>
  )
}

export default Body
