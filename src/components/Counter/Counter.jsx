import React, { Component } from "react";
// import ReactDOM from "react-dom";

class Counter extends Component {
    
    static defaultProps = {
    step: 1,
    initialValue: 0,
    };

    state = {
      value: this.props.initialValue,
    };  


    test = () => { 
        // this.setState({ value: 5 })
        for (let i = 0; i < 3; i += 1) {
            this.setState({ value: this.state.value + 1 });
            console.log(this.state.value);
        }
    }

    render() {
      return (
          <div>
              <button onClick={this.test}>button</button>
            <span>{this.state.value}</span>
        </div>
    )
  }
}

export default Counter;