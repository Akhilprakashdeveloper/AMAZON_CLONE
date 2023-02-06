import React from 'react'
import './Costfilter.css'
import axios from 'axios';
import Allfilter from './Allfilters'

const url = "http://localhost:5500/filter/"
function CostFilter(props) {
    const costFilter = (event) => {
    let categoryId = props.categoryId;
    let cost = (event.target.value).split('-');
    let lcost = cost[0];
    let hcost = cost[1];
    let costUrl = "";
    if(event.target.value === ""){
        costUrl = `${url}${categoryId}`
    }else{
        costUrl = `${url}${categoryId}?lcost=${lcost}&hcost=${hcost}`
    }
   
    axios.get(costUrl)
    .then((res) =>  {
      props.restPerCost(res.data);
    })
}




  return (
    <div>
        <div className='filter'>
            <Allfilter categoryId={props.categoryId} Filter={(data)=>{
                props.restPerCost(data);
            }}/>

            <div style={{width:'100%',height:'100%',border:'2px solid blue'}}>
              <h2 style={{marginLeft:'20%'}}>Cost Filters</h2>

              <div onChange={costFilter}>

                    <label className="radio" style={{'marginLeft':'20%','marginTop':'1%'}} >
                        <input type="radio" name="cuisine" value=""/>All
                    </label>
                    <br/>
                    <label className="radio" style={{'marginLeft':'20%'}} >
                        <input type="radio" name="cuisine" value="50-500"/>50-500
                    </label>
                    <br/>
                    <label className="radio" style={{'marginLeft':'20%'}} >
                        <input type="radio" name="cuisine" value="500-1500"/>500-1500
                    </label>
                    <br/>
                    <label className="radio" style={{'marginLeft':'20%'}} >
                        <input type="radio" name="cuisine" value="1500-10000"/>1500-10000
                    </label>
                    <br/>
                    <label className="radio" style={{'marginLeft':'20%'}}>
                        <input type="radio" name="cuisine" value="10000-35000"/>10000-35000
                    </label>
                    <br/>
                    <label className="radio"style={{'marginLeft':'20%'}} >
                        <input type="radio" name="cuisine" value="35000-45000"/>35000-45000
                    </label>
                    <br/>
                    <label className="radio" style={{'marginLeft':'20%'}} >
                        <input type="radio" name="cuisine" value="45000-55000"/>45000-55000
                    </label>
                    <br/>
                    <label className="radio" style={{'marginLeft':'20%'}}>
                        <input type="radio" name="cuisine" value="55000-85000"/>55000-85000
                    </label>
                    <br/>
                    <label className="radio"style={{'marginLeft':'20%'}} >
                        <input type="radio" name="cuisine" value="85000-150000"/>85000-150000
                    </label>
                    
                </div>
           
            </div>


      
        </div>
    </div>
  )
}

export default CostFilter