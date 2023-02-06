import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { useState,useEffect} from 'react';
import { withRouter } from 'react-router-dom'


const userUrl="http://localhost:5500/userInfo";

function Header(props) {
  const [userdata, setuserdata] = useState({});
 
  useEffect(() => {
    fetch(userUrl, {
      method: 'GET',
      headers: {
        'x-access-token': sessionStorage.getItem('ltk'),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setuserdata(data);
      });

  }, []);


 
  const ConditionalHeader = () => {
    if(userdata.name){
        let data = userdata;
        let outArray = [data.name,data.email,data.phone];
        sessionStorage.setItem('userInfo',outArray);
        return(     
          <div className='head-item'>
          <div className='head-items1'> Hello,{data.name}</div>

          <Link to="/orders" className='head-items2' style={{marginLeft:'5%'}}> Orders </Link>  
          <Link to={`/cart?productId=0`} className='head-items2' style={{marginLeft:'5%'}}>
               <i class="bi bi-cart-fill"></i>
               </Link> 
          <button className='head-items2' style={{marginLeft:'5%'}} onClick={handleLogout}> Logout</button>                   
        </div>
        )
       

    }else{
        return(
          <div className='head-item'>
          <Link to={`/login`} className='head-items1'> Hello, sign in</Link>  
          <Link to="/login" className='head-items2' style={{marginLeft:'5%'}}><i class="bi bi-cart-fill"></i></Link>                 
        </div>
        )
    }
    
}

 

const handleLogout=()=>{
  sessionStorage.removeItem('ltk')
  sessionStorage.removeItem('userInfo')
  setuserdata("");
  props.history.push("/")
}


return (
    <div>

        <div className='head'>
               <img src="https://i.ibb.co/CBx0Bh8/amazonheaderimage.png" id='amazon-logo'/>
               <span id="amazonlogo-title">.in</span>           
                  
                  <div className='head-locationDiv'>

                    <span class="bi bi-geo-alt" id="head-location"></span>
                    <p id="head-locationtext1">Hello</p>
                    <p id="head-locationtext2">Select your address</p>
                    <Link to="/">
                    <i class="bi bi-house" id='head-home'></i>
                    </Link>
                    
                    


                 </div>  
                   
                 <div className='head-search'>
                       <input type='text' id='head-inputbox'></input>
                       <div className='head-searchButton'>
                       <i className='bi bi-search' id='head-searchicon'></i>
                       </div>
                        
                 </div>
                
               {ConditionalHeader()}

        </div>
      
        

    </div>
  )
}

export default withRouter(Header);