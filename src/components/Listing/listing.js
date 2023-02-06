import React,{useEffect, useState} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import CostFilter from '../filters/Costfilter'
import './listing.css'
import axios from 'axios';
import { Link } from 'react-router-dom'


const Purl="http://localhost:5500/products/";

function Listing(props) {
  const [product, setproduct] = useState([])
  const [classname] = useState("third");
  const categoryId = props.match.params.category;
 
  useEffect(() => {
   
      axios.get(`${Purl}${categoryId}`).then((Response)=>{
    
        setproduct(Response.data);
  
      })}, [])

    const setDataPerFilter = (data) => {
      setproduct(data);
  }

  return (
    <div>
      <Header/>
      <div className="ProductMain-Div">
      <CostFilter categoryId={props.match.params.category} restPerCost={(data) => {setDataPerFilter(data)}}/>
      {product.map((item) => {

         if(props.match.params.category==1)
         {
          return (
            <Link to={`/checkout/${item.id}`}>
            <div key={item.id} >
              <div className='products'>
                 <div className='Img-Div'>
                  <img src={item.image} id="Product-Img"></img>
                 </div>
                 <div className='Img-Details'>
                   <p>{item.product_name}</p>
                   <p>{item.colour},{item.ram}+{item.storage}</p>
                   <p>{item.price}</p>
                 </div>
              </div>
            </div>
            </Link>
          )
         }

         else if(props.match.params.category==2)
         {
          return (
            <Link to={`/checkout/${item.id}`}>
            <div key={item.id}>
              <div className='products'>
                 <div className='Img-Div'>
                  <img src={item.image} id="Product-Img"></img>
                 </div>
                 <div className='Img-Details'>
                   <p>{item.product_name}</p>
                   <p>{item.processor}</p>
                   <p>{item.ram}+{item.storage}</p>
                   <p>{item.price}</p>
                 </div>
              </div>
            </div>
            </Link>
          )
         }

         else if(props.match.params.category==3)
         {
          return (
            <Link to={`/checkout/${item.id}`}>
            <div key={item.id}>
              <div className={classname}>
                 <div className='Img-Div'>
                  <img src={item.image} id="Product-Img"></img>
                 </div>
                 <div className='Img-Details'>
                   <p>{item.product_name}</p>
                   <p>{item.type}({item.colour})</p>
                   <p>{item.price}</p>
                 </div>
              </div>
            </div>
            </Link>
          )
         }

         else if(props.match.params.category==4)
         {
          return (
            <Link to={`/checkout/${item.id}`}>
            <div key={item.id}>
              <div className='products'>
                 <div className='Img-Div'>
                  <img src={item.image} id="Product-Img"></img>
                 </div>
                 <div className='Img-Details'>
                   <p>{item.product_name}</p>
                   <p>{item.type}</p>
                   <p>{item.price}</p>
                 </div>
              </div>
            </div>
            </Link>
          )
         }



          else{
            return (
              <Link to={`/checkout/${item.id}`}>
              <div key={item.id}>
                <div className='products'>
                   <div className='Img-Div'>
                    <img src={item.image} id="Product-Img"></img>
                   </div>
                   <div className='Img-Details'>
                     <p>{item.book_name}</p>
                     <p>{item.author}</p>
                     <p>{item.price}</p>
                   </div>
                </div>
              </div>
              </Link>
            )
          }
          
      })} 

      <Footer/> 
      </div>
    </div>
  )

}

export default Listing

