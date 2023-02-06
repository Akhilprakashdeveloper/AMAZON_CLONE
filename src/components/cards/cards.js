import React,{useState,useEffect} from 'react'
import './cards.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Cards() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5500/category').then(Response=>{
        setCategory(Response.data);
    })
    }, [])
    
    
   
  return (
 
    <div>
      
    
      {category.map((item,index) => (
       
        <Link to={`/listing/${category[index].category_id}`}>
        <div key={item.id} id="card4" className="col-lg-3">
          <img src={item.imgurl} className="cards-img" alt=''/>
          <span>{item.category}</span>
        </div>
        </Link>
       
        
      ))}

    
  </div>
 
  )
}

export default Cards