import React from 'react'
import './Allfilters.css'
import axios from 'axios'
const url = "http://localhost:5500/product?category="
const ourl="http://localhost:5500/products"

function Allfilters(props) {


   if(props.categoryId==1)
   {
    const Filter = (event) => {
        let categoryId = props.categoryId;
        let brand=event.target.value;
        let FilterUrl = "";
        if(event.target.value === ""|| event.target.value=='Select Brand'){
            FilterUrl = `${ourl}${categoryId}`
        }else{
           FilterUrl = `${url}${categoryId}&brand=${brand}`
        }
        
        axios.get(FilterUrl)
        .then((res) =>  {
            props.Filter(res.data)
        })
    }

    const Filter1 = (event) => {
      let categoryId = props.categoryId;
      let ram=event.target.value;
      let FilterUrl = "";
      if(event.target.value === ""|| event.target.value=='Select Ram'){
          FilterUrl = `${ourl}${categoryId}`
      }else{
         FilterUrl = `${url}${categoryId}&ram=${ram}`
      }
      
      axios.get(FilterUrl)
      .then((res) =>  {
          props.Filter(res.data)
      })
  }

  const Filter2 = (event) => {
    let categoryId = props.categoryId;
    let storage=event.target.value;
    let FilterUrl = "";
    if(event.target.value === ""|| event.target.value=='Select processor'){
        FilterUrl = `${ourl}${categoryId}`
    }else{
       FilterUrl = `${url}${categoryId}&storage=${storage}`
    }
    
    axios.get(FilterUrl)
    .then((res) =>  {
        props.Filter(res.data)
    })
}

const Filter3 = (event) => {
  let categoryId = props.categoryId;
  let colour=event.target.value;
  let FilterUrl = "";
  if(event.target.value === ""|| event.target.value=='Select Colour'){
      FilterUrl = `${ourl}${categoryId}`
  }else{
     FilterUrl = `${url}${categoryId}&colour=${colour}`
  }
  
  axios.get(FilterUrl)
  .then((res) =>  {
      props.Filter(res.data)
  })
}


return (
  <div>
      <div className='Main'>
     
          <div>
            <h2 style={{marginLeft:'20%',marginTop:'11%'}}>Filters</h2>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Brand</option>
                <option value="apple">Apple</option>
                <option value="one plus">One Plus</option>
                <option value="realme">Realme</option>
                <option value="redmi">Redmi</option>
                <option value="iqoo">Iqoo</option>
          </select>
          </div>



          <div style={{marginTop:'10%'}} onChange={Filter1}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Ram</option>
                <option value="4">4</option>
                <option value="6">6</option>
                <option value="8">8</option>
                <option value="12">12</option>
          </select>
          </div>



          <div style={{marginTop:'10%'}} onChange={Filter2}>
          <select style={{marginLeft:'20%'}}>
          <option>Select Storage</option>
                <option value="64">64</option>
                <option value="128">128</option>
                <option value="256">256</option>
          </select>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter3}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Colour</option>
                <option value="emereld forest">Emereld forest</option>
                <option value="charcoal black">Charcoal black</option>
                <option value="legend">Legend</option>
                <option value="hype blue">Hype blue</option>
                <option value="graphite">Graphite</option>
          </select>
          </div>


          
      </div>
  </div>
)
}




  else if(props.categoryId==2)

   {
    const Filter = (event) => {
        let categoryId = props.categoryId;
        let brand=event.target.value;
        let FilterUrl = "";
        if(event.target.value === ""|| event.target.value=='Select Brand'){
            FilterUrl = `${ourl}${categoryId}`
        }else{
           FilterUrl = `${url}${categoryId}&brand=${brand}`
        }
        
        axios.get(FilterUrl)
        .then((res) =>  {
            props.Filter(res.data)
        })
    }

    const Filter1 = (event) => {
      let categoryId = props.categoryId;
      let ram=event.target.value;
      let FilterUrl = "";
      if(event.target.value === ""|| event.target.value=='Select Ram'){
          FilterUrl = `${ourl}${categoryId}`
      }else{
         FilterUrl = `${url}${categoryId}&ram=${ram}`
      }
      
      axios.get(FilterUrl)
      .then((res) =>  {
          props.Filter(res.data)
      })
  }

  const Filter2= (event) => {
    let categoryId = props.categoryId;
    let storage=event.target.value;
    let FilterUrl = "";
    if(event.target.value === ""|| event.target.value=='Select Storage'){
        FilterUrl = `${ourl}${categoryId}`
    }else{
       FilterUrl = `${url}${categoryId}&storage=${storage}`
    }
    
    axios.get(FilterUrl)
    .then((res) =>  {
        props.Filter(res.data)
    })
}

const Filter3 = (event) => {
  let categoryId = props.categoryId;
  let processor=event.target.value;
  let FilterUrl = "";
  if(event.target.value === ""|| event.target.value=='Select Processor'){
      FilterUrl = `${ourl}${categoryId}`
  }else{
     FilterUrl = `${url}${categoryId}&processor=${processor}`
  }
  
  axios.get(FilterUrl)
  .then((res) =>  {
      props.Filter(res.data)
  })
}


return (
  <div>
      <div className='Main'>
     
          <div>
            <h2 style={{marginLeft:'20%',marginTop:'11%'}}>Filters</h2>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Brand</option>
                <option value="hp">Hp</option>
                <option value="lenovo">Lenovo</option>
                <option value="asus">Asus</option>
                <option value="acer">Acer</option>
                <option value="apple">Apple</option>
          </select>
          </div>



          <div style={{marginTop:'10%'}} onChange={Filter1}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Ram</option>
                <option value="8">8</option>
                <option value="16">16</option>
          </select>
          </div>



          <div style={{marginTop:'10%'}} onChange={Filter2}>
          <select style={{marginLeft:'20%'}}>
          <option>Select Storage</option>
                <option value="256">256GB</option>
                <option value="512">512GB</option>
                <option value="1000">1000GB</option>
          </select>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter3}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Processor</option>
                <option value="intel i3">Intel i3</option>
                <option value="intel i5">Intel i5</option>
                <option value="intel i9">Intel i9</option>
                <option value="amd ryzen 3">Amd ryzen 3</option>
                <option value="bionic m2">Bionic m2</option>
          </select>
          </div>


          
      </div>
  </div>
)

}




else if(props.categoryId==3)

   {
    const Filter = (event) => {
        let categoryId = props.categoryId;
        let brand=event.target.value;
        let FilterUrl = "";
        if(event.target.value === ""|| event.target.value=='Select Brand'){
            FilterUrl = `${ourl}${categoryId}`
        }else{
           FilterUrl = `${url}${categoryId}&brand=${brand}`
        }
        
        axios.get(FilterUrl)
        .then((res) =>  {
            props.Filter(res.data)
        })
    }

    const Filter1 = (event) => {
      let categoryId = props.categoryId;
      let type=event.target.value;
      let FilterUrl = "";
      if(event.target.value === ""|| event.target.value=='Select Type'){
          FilterUrl = `${ourl}${categoryId}`
      }else{
         FilterUrl = `${url}${categoryId}&type=${type}`
      }
      
      axios.get(FilterUrl)
      .then((res) =>  {
          props.Filter(res.data)
      })
  }

  const Filter2= (event) => {
    let categoryId = props.categoryId;
    let colour=event.target.value;
    let FilterUrl = "";
    if(event.target.value === ""|| event.target.value=='Select Colour'){
        FilterUrl = `${ourl}${categoryId}`
    }else{
       FilterUrl = `${url}${categoryId}&colour=${colour}`
    }
    
    axios.get(FilterUrl)
    .then((res) =>  {
        props.Filter(res.data)
    })
}


return (
  <div>
      <div className='Main'>
     
          <div>
            <h2 style={{marginLeft:'20%',marginTop:'11%'}}>Filters</h2>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Brand</option>
                <option value="Cazibe">Cazibe</option>
                <option value="Dennis Lingo">Dennis Lingo</option>
                <option value="GoSriKi">GoSriKi</option>
                <option value="Levi's">Levi's</option>
                <option value="Generic">Generic</option>
          </select>
          </div>



          <div style={{marginTop:'10%'}} onChange={Filter1}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Type</option>
                <option value="jacket">jacket</option>
                <option value="shirt">shirt</option>
                <option value="kurta">kurta</option>
                <option value="pants">pants</option>
                <option value="saree">saree</option>
               
          </select>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter2}>
          <select style={{marginLeft:'20%'}}>
          <option>Select Colour</option>
                <option value="Khaki">Khaki</option>
                <option value="olive">Olive</option>
                <option value="blue">blue</option>
                <option value="black">black</option>
                <option value="Maroon">Maroon</option>
          </select>
          </div>     
      </div>
  </div>
)

}


else if(props.categoryId==4)

   {
    const Filter = (event) => {
        let categoryId = props.categoryId;
        let brand=event.target.value;
        let FilterUrl = "";
        if(event.target.value === ""|| event.target.value=='Select Brand'){
            FilterUrl = `${ourl}${categoryId}`
        }else{
           FilterUrl = `${url}${categoryId}&brand=${brand}`
        }
        
        axios.get(FilterUrl)
        .then((res) =>  {
            props.Filter(res.data)
        })
    }

    const Filter1 = (event) => {
      let categoryId = props.categoryId;
      let type=event.target.value;
      let FilterUrl = "";
      if(event.target.value === ""|| event.target.value=='Select Type'){
          FilterUrl = `${ourl}${categoryId}`
      }else{
         FilterUrl = `${url}${categoryId}&type=${type}`
      }
      
      axios.get(FilterUrl)
      .then((res) =>  {
          props.Filter(res.data)
      })
  }


return (
  <div>
      <div className='Main'>
     
          <div>
            <h2 style={{marginLeft:'20%',marginTop:'11%'}}>Filters</h2>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Brand</option>
                <option value="Havells">Havells</option>
                <option value="usha">Usha</option>
                <option value="prestige">Prestige</option>
                <option value="Havells">Havells</option>
                <option value="Philips">Philips</option>
          </select>
          </div>



          <div style={{marginTop:'10%'}} onChange={Filter1}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Type</option>
                <option value="kettle">Kettle</option>
                <option value="mixer grinder">Mixer grinder</option>
                <option value="induction cooktop">Induction cooktop</option>
                <option value="Fan">Fan</option>
                <option value="ironbox">Ironbox</option>
               
          </select>
          </div>
    
      </div>
  </div>
)

}

else if(props.categoryId==5)

   {
    const Filter = (event) => {
        let categoryId = props.categoryId;
        let author=event.target.value;
        let FilterUrl = "";
        if(event.target.value === ""|| event.target.value=='Select Author'){
            FilterUrl = `${ourl}${categoryId}`
        }else{
           FilterUrl = `${url}${categoryId}&author=${author}`
        }
        
        axios.get(FilterUrl)
        .then((res) =>  {
            props.Filter(res.data)
        })
    }



return (
  <div>
      <div className='Main'>
     
          <div>
            <h2 style={{marginLeft:'20%',marginTop:'11%'}}>Filters</h2>
          </div>


          <div style={{marginTop:'10%'}} onChange={Filter}>
          <select style={{marginLeft:'20%'}}>
                <option>Select Author</option>
                <option value="Marian Keyes">Marian Keyes</option>
                <option value="Devashish Sardana">Devashish Sardana</option>
                <option value="James Clear">James Clear</option>
                <option value="J.K.Rowling">J.K.Rowling</option>
                <option value="oscar Wilde">Oscar Wilde</option>
          </select>
          </div>
    
      </div>
  </div>
)

}




}

export default Allfilters