import React,{useEffect,useState} from 'react'
import './cart.css'
import Header from '../header/header'
import Footer from '../footer/footer'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Purl="http://localhost:5500/productdetail/"

function Cart(props) {
  
  const [cartitem, setcartitem] = useState([]);
 
 
   useEffect(() => {
    let productId = props.location.search.split('=')[1];
    if(productId)
    {
    axios.get(`${Purl}${productId}`).then((Response)=>{

      let storedData = JSON.parse(localStorage.getItem('cart')) || []; 

      storedData = storedData.concat(Response.data);

      localStorage.setItem('cart', JSON.stringify(storedData));


      storedData= JSON.parse(localStorage.getItem('cart')) || [];
     
      const needData=storedData.reduce((finalArray,current)=>{
        let obj=finalArray.find((item)=>item.id === current.id);
        if(obj)
        {
          return finalArray;
        }return finalArray.concat([current]);

      },[]);


      setcartitem(needData);
      sessionStorage.setItem('cartitem',JSON.stringify(needData));
    
     })
    }
   
  }, []);


const DeleteItem = (id) => {
  let storedData = JSON.parse(localStorage.getItem('cart')) || [];
  storedData = storedData.filter((item) => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(storedData));

  let UpdatedCart=cartitem.filter(item => item.id!==id);
  setcartitem(UpdatedCart);
  
}
if(cartitem=="")
{

  return (
    <div>
    <Header/>
     <div  className='main'>
     <div className='cart'> 
     <Link to="/">    
      <h1 style={{marginLeft:'33%',marginTop:'2%'}}>CONTINUE SHOPPING</h1>
      </Link>  
      </div>
     <Footer/>
     </div>
    </div>
  )

}



  else
  {
 
return (
  <div>
  <Header/>
   <div  className='main'>
   <div className='cart'> 
   <Link to="/">    
    <h1 style={{marginLeft:'33%',marginTop:'2%'}}>CONTINUE SHOPPING</h1>
    </Link>  

    {cartitem.map((item)=>{
      if(item.category_id==5)
      {
        return(
          <div key={item.id} style={{height:'300px',width:'280px',border:'2px solid red',marginTop:'2%',float:'left',marginLeft:'2%',marginBottom:'2%'}}>
          <Link to={`/checkout/${item.id}`}>
          <img src={item.image} style={{height:'70%',width:'100%'}}></img>
          <p style={{fontSize:'11px',marginLeft:'20%'}}>{item.book_name}</p>
          </Link>
          <button onClick={() => DeleteItem(item.id)} style={{marginLeft:'18.5%'}}>Delete item From Cart</button>
        </div>
        )
      }
      else
      {
        return(
          
          <div key={item.id} style={{height:'300px',width:'280px',border:'2px solid red',marginTop:'2%',float:'left',marginLeft:'2%',marginBottom:'2%'}}>
          <Link to={`/checkout/${item.id}`}>
          <img src={item.image} style={{height:'70%',width:'100%'}}></img>
          <p style={{fontSize:'11px',marginLeft:'20%'}}>{item.product_name}</p>
          </Link>
          <button onClick={() => DeleteItem(item.id)} style={{marginLeft:'18.5%'}}>Delete item From Cart</button>
        </div>
  
        )
      }
    })}


    </div>
   </div>
  </div>
)

  }





}

export default Cart



