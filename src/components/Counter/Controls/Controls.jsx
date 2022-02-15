import React from "react";

const Controls = ({increment, decrement}) => {
    return (
        <div>
            <button onClick={increment}>увеличить на 1</button>
            <button onClick={decrement}>уменьшить на 1</button>
        </div>
    )
}
export default Controls;