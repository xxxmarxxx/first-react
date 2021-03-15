import React, {PureComponent} from 'react';

class Counter extends PureComponent {
    state = { 
        counter: 0,
     }
    render() { 
        const {counter} = this.state;
        return ( 
            <div>
                <p> The counter value is: {counter}</p>
                <button className="btn_mar" onClick={this.asyncIncreaseCounterValue}>Get asynchronous data</button>
            </div>
         );
    }
    asyncIncreaseCounterValue = ()=> setTimeout(
        ()=>{
            this.setState(prevState => ({
                counter: prevState.counter + 1,
            }))
        },1000
    )
}
 
export default Counter;