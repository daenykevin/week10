import { useState } from 'react';
import CountNumber from './CountNumber';

function Counter() {
    const [count, setCount] = useState(0);

    const buttonStyle = {
        backgroundColor: "black",
        border: "10px",
        color: "white",
        padding: "10px 20px",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        borderRadius: "15px",
        outlineColor: "blue",
        outlineStyle: "solid",
    };
 
    function increment() {
        setCount(count+1);
    }
    function reduction() {
        setCount(count-1);
    }
    function increment10() {
        setCount(count+10);
    }
    function reduction10() {
        setCount(count-10);
    }
    function reset() {
        setCount(0)
    }

    return (
    <div>
     <CountNumber count={count} />

     <button style={buttonStyle} onClick={reduction10}>-10</button>

     <button style={buttonStyle} onClick={reduction}>-1</button>

     <button style={buttonStyle} onClick={reset}>reset</button>

     <button style={buttonStyle} onClick={increment}>+1</button>

     <button style={buttonStyle} onClick={increment10}>+10</button>
     
    </div>
    )

}

export default Counter;