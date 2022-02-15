import React, { Component}from "react";
import Controls from "components/Counter/Controls/Controls";
import Value from "./Value/Value";
import {CounterBox}from "./Counter.styled"

class Counter extends Component {
    static defaultProps = {
        initialValue:0
    }

    state = {
        value: this.props.initialValue,
        a: 4, 
        b:7
    };

    handleIncrement = () => {
        this.setState((prevState) => ({value: prevState.value + 1}));

    }
    handleDecrement = () => {
        this.setState((prevState) => {
            return {
                value:prevState.value -1
            }
        })
    }

    render() {
        const { value} = this.state;
        return (
            <CounterBox>
                <Value value={value}/>
                <Controls
                    increment={this.handleIncrement}
                    decrement={this.handleDecrement}
                />
            </CounterBox>
        )
    }
}

export default Counter;