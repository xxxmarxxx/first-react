import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Udemy from '.PolskieUdemy/UdemyLe130_hook';
import Udemy2 from './PolskieUdemy/UdemyLe132';
import Udemy135 from './PolskieUdemy/UdemyLe135';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Udemy2 />
    <Udemy135 />
  </React.StrictMode>,
  document.getElementById('root')
);


