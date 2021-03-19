import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Content from './Content';
import Header from './Header';

const App = () => {
    return ( 
        <div>
            <Router>
                <Header />
                <Content />
            </Router>
        </div>
     );
}
 
export default App;
