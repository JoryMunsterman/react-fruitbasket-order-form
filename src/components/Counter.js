import Button from "./Button"
// import React, { useState } from "react";

function Counter () {
    const [count, setCount] = React.useState(0);
    const addItem = () => {
        setCount(count + 1)
    }
    const extractItem = () => {
        setCount(count - 1)
    }
    return (
        <>
            <div className="counterContainer">
                <Button buttonHandler={extractItem}> - </Button>
                <p className="count">{count}</p>
                <Button buttonHandler={addItem}> + </Button>
            </div>
        </>
    )
}

export default Counter;

