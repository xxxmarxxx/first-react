import React from 'react';
import {useParams} from 'react-router-dom';

const TypeScript = () => {
    const { message } = useParams();

    // console.log(paramsObject);
    return ( 
        <article>
            <h2>TypeScript</h2>
            <p>{message}</p>
        </article>
     );
}
 
export default TypeScript;