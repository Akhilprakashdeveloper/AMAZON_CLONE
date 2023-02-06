import React,{useEffect,useState} from 'react'
import "./orders.css"
import Header from '../header/header';
import axios from 'axios';


const Odurl="http://localhost:5500/orders/"

function Orders(props) {

const [order, setorder] = useState([])

 useEffect(() => {
    let email=sessionStorage.getItem('userInfo').split(',')[1];
   axios.get(`${Odurl}${email}`).then((Response)=>{
      setorder(Response.data);
   })
  
 }, [])




 useEffect(() => {
    if(props.location.search){
    let query = props.location.search.split('&');
    if(query){
    let data = {
    "transaction": query[0].split('=')[1],
    "bank": query[3].split('=')[1],
    "date": query[2].split('=')[1]
    }
    let id = query[1].split('=')[1].split('_')[1];
    axios.put(`${Odurl}${id}`, data)
    .then(response => {
    if(response.status === 200){
    console.log(response.data);
    } else {
    console.log(response.data.message);
    }
    })
    .catch(error => console.log(error));
    }
    }
}, [props.location])


 
 
  return (
    <div>
        <Header/>
        <div className='main'>
            <div className='order'>
                {
                    order.map((item)=>
                    {
                        return(
                            <div className='orderItem'>

                            <p>ITEM:{item.product_name}</p>
                            <p>COST:{item.cost}</p>
                            <p>ADDRESS:{item.address}</p>
                            <p>ORDER ID:{item.id}</p>
                            <p>TRANSACTION:{item.transaction}</p>
                            <p>BANK:{item.bank}</p>
                            <p>DATE:{item.date}</p>
        
                        </div>
                        )
                    })
                }

               
            
            </div>

        </div>

    </div>
  )
}

export default Orders