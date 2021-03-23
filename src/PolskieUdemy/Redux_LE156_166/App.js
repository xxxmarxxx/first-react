import React from "react";
import { Provider } from "react-redux";

import Form from './Form';
import List from './List';
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="center">
       <Form />
        <p>Programowanie z redux</p>
        <List />
      </div>
    </Provider>
  );
};

export default App;
