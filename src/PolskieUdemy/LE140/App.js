import React, { PureComponent } from "react";

import Button from "./Button";
import UserInfo from "./UserInfo";

import { AppContext, defaultObject } from "./AppContext";

// jak korzystac z contex

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true,
  };

  render() {
    return (
      <div className='center'>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserAdult,
            toggleLoggedState: this.handleToggleStateIsAdult,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
        <h1>on/off Logged</h1>
        <p>Start editing to see some magic happen </p>
      </div>
    );
  }
  handleToggleStateIsLogged = () => {
    // console.log('hello');
    this.setState(prevState => ({
      isUserLogged: !prevState.isUserLogged
    }));
  }
  handleToggleStateIsAdult = () => {
    
    this.setState(prevState => ({
      isUserAdult: !prevState.isUserAdult
    }));
  }
  
}

export default App;
