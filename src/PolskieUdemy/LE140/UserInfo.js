import React, { PureComponent } from "react";

import { Le140Context } from "./AppContext";

class UserInfo extends PureComponent {
  state = {};
  render() {
    return (
      <Le140Context.Consumer>
        {(props) => (
          <div>
            <p>User is ...</p>
          </div>
        )}
      </Le140Context.Consumer>
    );
  }
}

export default UserInfo;
