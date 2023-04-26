// import React, { useEffect, useState } from 'react';

// function Finding() 
// {
// const [title, setTitle] = useState([]);
// useEffect(() => {
//   fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(res=>setTitle(res.data))
// },[]);
//   return (
//     <div>
//       <h1>Search</h1>
//       <input type='text' value={title} onChange={e => setTitle(e.target.value)} />

//   {title}
  
//   {console.log(title)}
//   </div>
//   );
// }

// export default Finding;

import React, { useState } from 'react';

function Finding()
 {
  const namesFromDatabase = [
    {id: 1, username: 'shyam'},
    {id: 2, username: 'kailash'},
    {id: 3, username: 'hemanth'},
    {id: 4, username:  'arun'},
    {id: 5, username: 'aadhithyan'},
    {id: 6, username: 'sriram'},
  ]
  const [names, setNames] = useState(namesFromDatabase)
  const filterNames = e => {
    const search = e.target.value;
    const filteredNames = namesFromDatabase.filter(names => names.username.includes(search))
    setNames(filteredNames)
  }

  return (
    <div>
      <h1>username</h1>
      <input type='text' onChange={(e) => filterNames(e)} />
      <button>Search</button>
      <ul>
        {names.map(name => {
            return <li key={name.id}>{name.username}</li>
        })}
      </ul>
    </div>
  );
}

export default Finding;