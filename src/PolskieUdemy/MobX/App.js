import React from 'react';
import Comments from './Comments'
import Form from './Form';
import StoreProvider from './stores/StoreProvider';

const App = () => {
    return ( 
        <StoreProvider>
        <div>
            <h1>Opinie na temat naszej ksiazki o programowaniu</h1>
            <Comments/>
            <Form/>

        </div>
        </StoreProvider>
     );
}
 
export default App;