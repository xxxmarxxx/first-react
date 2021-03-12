import React from 'react';
import './App.css';

const links = () => {
    const handleLink = ()=>{
        // const aaa = "https://sass-lang.com/documentation/at-rules/mixin";
        
    }
    return ( 
        <div>
            <button className="btn" style={{margin:'2rem'}} onClick={handleLink}>link</button>
            {/* <a href="https://sass-lang.com/documentation/at-rules/mixin">sass</a> */}
        </div>
     );
}
 
export default links;