import React, { PureComponent } from "react";
import { AppContext } from "./AppContext";

class Button extends PureComponent {
  state = {};
  render() {
    return (
      <AppContext.Consumer>
        {({toggleLoggedState}) => (
          <button onClick={toggleLoggedState} className="btn_mar">
            switch user status
          </button>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Button;
