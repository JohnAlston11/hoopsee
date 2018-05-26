import React from 'react';
import {Link} from 'react-router-dom';

const Borough = ({select}) =>{
    return (
        <div>
            {select.map((borough, key)=>(
                <Link key={key} to={`/courts/${borough.Prop_ID[0]}/${borough.Prop_ID}/`} > 
                    <h1>
                        {borough.Name}
                    </h1> 
                </Link>
            ))}
        </div>
)};

export default Borough