import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './checkout.css'
import Header from '../header/header'
import Footer from '../footer/footer'
const purl="http://localhost:5500/productdetail/"

function Checkout(props) {

  const [product, setproduct] = useState([]);


  useEffect(() => {

   const productId=props.match.params.product;
    axios.get(`${purl}${productId}`).then((Response)=>{
      setproduct(Response.data);
    }
    )}, [])
  
  


  return (
    <div>
      <Header/>
      {product.map((item)=>{

        if(item.category_id==1)
        {
          return(
            <div className='productdetailDiv'>
            <div className='innerdiv1'>
             <div className='imgdiv'>
               <img src={item.image} style={{height:"100%",width:"100%"}} alt=""></img>
             </div>
             <div className='imgdetails'>
                <h1 style={{marginTop:'2%',fontSize:'50px'}}>{item.product_name}</h1>
                <p style={{fontSize:'45px',color:'red'}}>{item.brand}</p>
                <p style={{fontSize:'40px',color:'blue'}}>{item.ram}+{item.storage}</p>
                <p style={{fontSize:'35px',color:'yellow'}}>{item.price}</p>
                
                <Link to={`/listing/${item.category_id}`} className="btn btn-danger" style={{ marginTop:"3%",float:'left'}}>Back</Link>
                
              
               
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/cart?productId=${item.id}`} className="btn btn-info" style={{marginLeft:'2%',marginTop:"3%"}}>Add to cart</Link> :
    null
}



{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/placeorder/${props.match.params.product}`} className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link> :
    <Link to="/login" className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link>

}              



             </div>
            </div>
            <Footer/>
           </div>
          )
        }



        if(item.category_id==2)
        {
          return(
            <div className='productdetailDiv'>
            <div className='innerdiv1'>
             <div className='imgdiv'>
               <img src={item.image} style={{height:"100%",width:"100%"}} alt=""></img>
             </div>
             <div className='imgdetails'>
                <h1 style={{marginTop:'2%',fontSize:'50px'}}>{item.product_name}</h1>
                <p style={{fontSize:'40px',color:'blue'}}>{item.processor}</p>
                <p style={{fontSize:'40px',color:'blue'}}>{item.ram}+{item.storage}</p>
                <p style={{fontSize:'35px',color:'yellow'}}>{item.price}</p>
               
                <Link to={`/listing/${item.category_id}`} className="btn btn-danger" style={{ marginTop:"3%",float:'left'}}>Back</Link>
               
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/cart?productId=${item.id}`} className="btn btn-info" style={{marginLeft:'2%',marginTop:"3%"}}>Add to cart</Link> :
    null
}


               
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/placeorder/${props.match.params.product}`} className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link> :
    <Link to="/login" className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link>

}
             </div>
            </div>
            <Footer/>
           </div>
          )
        }




        if(item.category_id==3)
        {
          return(
            <div className='productdetailDiv'>
            <div className='innerdiv1'>
             <div className='imgdiv'>
               <img src={item.image} style={{height:"100%",width:"100%"}} alt=""></img>
             </div>
             <div className='imgdetails'>
                <h1 style={{marginTop:'3%',fontSize:'40px'}}>{item.product_name}</h1>
                <p style={{fontSize:'40px',color:'red'}}>{item.brand}</p>
                <p style={{fontSize:'35px',color:'blue'}}>{item.type}({item.colour})</p>
                <p style={{fontSize:'35px',color:'yellow'}}>{item.price}</p>
               
                <Link to={`/listing/${item.category_id}`} className="btn btn-danger" style={{ marginTop:"3%",float:'left'}}>Back</Link>
                
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/cart?productId=${item.id}`} className="btn btn-info" style={{marginLeft:'2%',marginTop:"3%"}}>Add to cart</Link> :
    null
}



               
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/placeorder/${props.match.params.product}`} className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link> :
    <Link to="/login" className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link>

}



             </div>
            </div>
            <Footer/>
           </div>
          )
        }




        if(item.category_id==4)
        {
          return(
            <div className='productdetailDiv'>
            <div className='innerdiv1'>
             <div className='imgdiv'>
               <img src={item.image} style={{height:"100%",width:"100%"}} alt=""></img>
             </div>
             <div className='imgdetails'>
                <h1 style={{marginTop:'2%',fontSize:'40px'}}>{item.product_name}</h1>
                <p style={{fontSize:'40px',color:'red'}}>{item.brand}</p>
                <p style={{fontSize:'35px',color:'blue'}}>{item.type}</p>
                <p style={{fontSize:'35px',color:'yellow'}}>{item.price}</p>
               
                <Link to={`/listing/${item.category_id}`} className="btn btn-danger" style={{ marginTop:"3%",float:'left'}}>Back</Link>
              
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/cart?productId=${item.id}`} className="btn btn-info" style={{marginLeft:'2%',marginTop:"3%"}}>Add to cart</Link> :
    null
}



                
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/placeorder/${props.match.params.product}`} className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link> :
    <Link to="/login" className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link>

}


             </div>
            </div>
            <Footer/>
           </div>
          )
        }





        else
        {
          return(
            <div className='productdetailDiv'>
            <div className='innerdiv1'>
             <div className='imgdiv'>
               <img src={item.image} style={{height:"100%",width:"100%"}} alt=""></img>
             </div>
             <div className='imgdetails'>
                <h1 style={{marginTop:'15%',fontSize:'40px'}}>{item.book_name}</h1>
                <p style={{fontSize:'45px',color:'red'}}>{item.author}</p>
                <p style={{fontSize:'35px',color:'yellow'}}>{item.price}</p>
               
                <Link to={`/listing/${item.category_id}`} className="btn btn-danger" style={{ marginTop:"3%",float:'left'}}>Back</Link>

               
{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/cart?productId=${item.id}`} className="btn btn-info" style={{marginLeft:'2%',marginTop:"3%"}}>Add to cart</Link> :
    null
}



{
    sessionStorage.getItem('userInfo')=="" || sessionStorage.getItem('userInfo') ?
    <Link to={`/placeorder/${props.match.params.product}`} className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link> :
    <Link to="/login" className="btn btn-success" style={{marginLeft:'2%',marginTop:"3%"}}>Continue</Link>

}
             </div>
            </div>
            <Footer/>
           </div>
          )
        }


      })}
        
      
     


    </div>
  )
}

export default Checkout