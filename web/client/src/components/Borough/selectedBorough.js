import React from 'react';

const Borough = ({select}) =>(
    <div>
       {select.map((borough, key)=>(
           <h1>{borough.Name}</h1>
       ))}
    </div>
);

export default Borough