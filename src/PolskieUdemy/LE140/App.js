import React, { PureComponent } from "react";
import { Le140Context, defaultObject } from "./AppContext";
import UserInfo from "./UserInfo";

// jak korzystac z contex

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
  };

  render() {
    return (
      <div>
        <Le140Context.Provider value={{
          isUserLogged: this.state.isUserLogged,
          toggleLoggedState: this.handleToggleStateIsLogeged
        }}>
          <UserInfo />
        </Le140Context.Provider>
        <h1>Hello StackBlitz</h1>
        <p>Start editing to se some magic happen </p>
      </div>
    );
  }
  handleToggleStateIsLogged = () => this.setState(prevState => ({
    isUserLogged: !prevState.isUserLogged,
  }));
}

export default App;
