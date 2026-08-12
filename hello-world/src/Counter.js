import React, { useEffect, useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('The counter variable changing now $(counter)')
        document.title = 'Counter App ${counter}'
    },[counter])
    return (
        <div>
            <h2>Counter is</h2>
            <p><strong>{counter}</strong></p>
            <button onClick={() => setCounter(counter + 1)}>Click Me</button>
        </div>
    );
}

export default Counter;