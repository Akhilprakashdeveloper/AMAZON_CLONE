import React, { useEffect, useState } from 'react'
import './PlaceOrder.css'
import Header from "../header/header"
import axios from 'axios';
const Purl="http://localhost:5500/productdetail/";
const Ourl="http://localhost:5500/orders";



function PlaceOrder(props) {

const userdata=(sessionStorage.getItem('userInfo').split(','));

    
const [product, setproduct] = useState([]);

const [orderdata, setorderdata] = useState({
    id:Math.floor(Math.random()*10000),
    product_name:'',
    cost:0,
    name:userdata?userdata[0]:'',
    email:userdata?userdata[1]:'',
    phone:userdata?userdata[2]:'',
    address:'',
})




useEffect(() => {
    const productId = props.match.params.buyproductid;
    axios.get(`${Purl}${productId}`).then((response) => {
        setproduct(response.data[0]);
        setorderdata({...orderdata, product_name: response.data[0].product_name, cost: response.data[0].price})
    });
 }, []);
 

    const HandleChange = (event) => {
        event.preventDefault();
        setorderdata({...orderdata, [event.target.name]: event.target.value});
    }


    const handleSubmit = () => {
        if(orderdata) {
          axios.post(Ourl, JSON.stringify(orderdata), {
            headers: {
              'accept':'application/json',
              'Content-Type':'application/json'
            }
          })
            .then(() => {
              props.history.push('/');
            })
            .catch(err => console.log(err));
        }
      }
      
    
  
  return (

        <div className='main'>
            <Header/>
          
                    <div className="container">

                    <div className="panel panel-primary">
    
                    <div className="panel-heading">
                       <h3>Order for: </h3>
                   </div>

    
                        <div className="panel-body" style={{marginTop:"5%"}} >
                            <form action="http://localhost:4100/paynow" method="POST">
                                <input type="hidden" name="cost" value={orderdata.cost}/>
                                <input type="hidden" name="id" value={orderdata.id}/>
                                <input type="hidden" name="product_name" value={orderdata.product_name}/>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label for="name" className="control-label">Name</label>
                                        <input className="form-control" id="fname" name="name" value={orderdata.name}
                                        onChange={HandleChange} required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="email" className="control-label">Email</label>
                                        <input type="email" className="form-control" id="email" name="email" value={orderdata.email} onChange={HandleChange} required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="phone" className="control-label">Phone</label>
                                        <input type="number" className="form-control" id="phone" name="phone" value={orderdata.phone} onChange={HandleChange}  required/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label for="address" className="control-label">Address</label>
                                        <input className="form-control" id="address" name="address" value={orderdata.address} onChange={HandleChange} required/>
                                    </div>
                                </div>

                                    <div className='product'>
                                      <img src={product.image} style={{width:"100%",height:"100%"}}></img>
                                   </div>
                                   <div className='price'>
                                       
                                      <p >RS:{product.price}</p>

                                   </div>
                            
                                <button className="btn btn-success" type="submit" style={{marginTop:"13%"}} onClick={handleSubmit}>
                                    PlaceOrder
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
                

           
            
            </div>
         
  )
}

export default PlaceOrder