import React from 'react';
import {Link} from 'react-router-dom';

const Borough = ({select}) =>{
    return (
        <div>
            {select.map((borough, key)=>(
                <Link key={key} to={`/courts/${borough.Prop_ID[0]}/${borough.Prop_ID}/`} > 
                    <p className={'name'}>
                        {borough.Name}
                    </p> 
                </Link>
            ))}
        </div>
)};

export default Borough