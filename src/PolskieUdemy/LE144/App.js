import React, { createRef, PureComponent } from "react";
import Counter from './Counter'
class App extends PureComponent {
  textInput = createRef();
  numberInput = createRef();
  paragraphElement = createRef();
  render() {
    return (
      <div className="center">
        
          <input ref={this.textInput} type="text" />
          <input ref={this.numberInput} type="number" />
          <p ref={this.paragraphElement}>Hello</p>
          <button onClick={this.focusTextInput} className="btn_mar">
          set focus on input
          </button>
          <button onClick={this.focusNumberInput} className="btn_mar">
          set focus on number
          </button>
          <button onClick={this.addChar} className="btn_mar">
            add !
          </button>
          <div>
             <Counter />
          </div>
      </div>
    );
  }
  focusTextInput = () => {
    this.textInput.current.focus();
  };
  focusNumberInput = () => {
    this.numberInput.current.focus();
  };
  addChar = () => {
    this.paragraphElement.current.textContent += " !";
  };
}

export default App;
