import React, { useState } from 'react';
import './App.css';
import data from './TemplateData.json';
function Image()
{
  const [searchTerm, setSearchTerm] = useState(" "); 
  return (
   <>
   <div className='templateContainer'>
   <div className='searchInput_Container'>
    <center>
     <input type='text' placeholder='Search here.....' id='searchInput' onChange={(e) => {
      setSearchTerm(e.target.value);
     }}/> 
     </center>
   </div>
   <div className='template_Container'>
    {
      data
      .filter((val) => {
        if(searchTerm === "")
        {
          return val;
        }
        else if(val.title.includes(searchTerm))
        {
        return val;
        }
      })
      .map((val) => {
       return(
        <div className='template' key={val.id}>
      <img src={val.image} alt='' />
      <h3>{val.title}</h3>
      <p>{val.price}</p>
        </div>
       ) 
      })
    }
   </div>
   </div>
   </>
  );
}

export default Image;