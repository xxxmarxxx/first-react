import React, { createRef, PureComponent } from "react";

class Counter extends PureComponent {
  state = {
    counter: 0,
  };

componentRef = createRef()

  render() {
    const { counter } = this.state;
    return (
      <div ref={this.componentRef}>
        <p> The counter value is: {counter}</p>
        <button className="btn_mar" onClick={this.asyncIncreaseCounterValue}>
          Get asynchronous data
        </button>
      </div>
    );
  }

  asyncIncreaseCounterValue = () =>
    setTimeout(() => {
        if (this.componentRef.current){
            this.setState((prevState) => ({
              counter: prevState.counter + 1,
            }))
        }
    }, 3000);
}

export default Counter;
