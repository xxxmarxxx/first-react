import React, { PureComponent } from "react";

import Button from "./Button";
import UserInfo from "./UserInfo";

import { AppContext, defaultObject } from "./AppContext";

// jak korzystac z contex

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <div>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogeged,
          }}
        >
          <UserInfo />
          <Button />
          <Button />
        </AppContext.Provider>
        <h1>Hello StackBlitz</h1>
        <p>Start editing to se some magic happen </p>
      </div>
    );
  }
  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
}

export default App;
