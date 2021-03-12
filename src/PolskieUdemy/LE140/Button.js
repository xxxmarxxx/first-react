import React, { PureComponent } from "react";
import { AppContext } from "./AppContext";

class Button extends PureComponent {
  static contextType = AppContext;
  state = {};
  render() {
    return (
      <button onClick={this.context.toggleLoggedState} className="btn_mar">
        switch user status
      </button>
    );
  }
}

export default Button;
