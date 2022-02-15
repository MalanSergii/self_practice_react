import react, { Component } from "react";
import {Box} from "./DropDown.styled"

class DropDown extends Component{
    state = {
        visible: false, 
    }

    // show = ()=> {
    //     this.setState({
    //         visible:true,
    //     })
    // }
    // hide = () => {
    //     this.setState({
    //         visible:false
    //     })
    // }

    toggle = () => {
        this.setState(prev => ({
           visible:!prev.visible,
       }))
    }

    render() {
        const { visible} = this.state;
        return (
            <Box>
                <button
                    onClick={this.toggle}>{visible ? ("close") : ("open")}
                </button>
                {/* <button onClick={this.toggle}>hide</button> */}
                {visible && (
                    <div>Some text to show</div>
                )}
            </Box>
        )
    }
}

export default DropDown;