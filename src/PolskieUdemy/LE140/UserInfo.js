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
            <p
              style={{
                margin: "40px",
                border: "solid 1px #fff",
                backgroundColor: "#eeeee5",
              }}
            >
              User is
              {isUserLogged ? "logged in" : "not logged in"}
            </p>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default UserInfo;
