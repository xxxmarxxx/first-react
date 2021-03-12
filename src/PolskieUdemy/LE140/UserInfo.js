import React, { PureComponent } from "react";

import { AppContext } from "./AppContext";

class UserInfo extends PureComponent {
  state = {};
  render() {
    return (
      <AppContext.Consumer>
        {({ isUserLogged }) => (
          <div>
            {console.log(isUserLogged)}
            <p>User is {isUserLogged ? "logged" : "no logged"}</p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
