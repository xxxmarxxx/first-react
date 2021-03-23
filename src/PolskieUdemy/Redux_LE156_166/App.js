import React from "react";
import { Provider } from "react-redux";

import Form from './Form';
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="center">
       <Form />
        <p>Programowanie z redux</p>
      </div>
    </Provider>
  );
};

export default App;
