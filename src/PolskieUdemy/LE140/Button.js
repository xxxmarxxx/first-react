// import React, { PureComponent } from "react";
import React, { useContext } from "react";
import { AppContext } from "./AppContext";

//! change to arrow function component
const Button = () => {
  const { toggleLoggedState } = useContext(AppContext);

  return (
    <button onClick={toggleLoggedState} className="btn_mar">
      switch user status
    </button>
  );
};

export default Button;

//! change to class component
// class Button extends PureComponent {
//   static contextType = AppContext;
//   state = {};
//   render() {
//     return (
//       <button onClick={this.context.toggleLoggedState} className="btn_mar">
//         switch user status
//       </button>
//     );
//   }
// }

// export default Button;
