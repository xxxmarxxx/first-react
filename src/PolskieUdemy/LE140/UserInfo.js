import React, { PureComponent } from "react";

import { AppContext } from "./AppContext";

class UserInfo extends PureComponent {
  static contextType = AppContext;

  state = {};
  render() {
    const { isUserLogged } = this.context;
    const userLoggedInfo = isUserLogged ? " logged in" : " not logged in";

    return (
      <div>
        <p
          style={{
            margin: "40px",
            border: "solid 1px #fff",
            backgroundColor: "#eeeee5",
          }}
        >
          User is
          {userLoggedInfo}
        </p>
      </div>
    );
  }
}

export default UserInfo;
