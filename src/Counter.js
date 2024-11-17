import { useState } from 'react';
import CountNumber from './CountNumber';
import Button from "./Button";

function Counter() {
    const [count, setCount] = useState(0);
 
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

     <Button text = {"-10"} func = {reduction10} />

     <Button text = {"-1"} func = {reduction} />

     <Button text = {"reset"} func = {reset} />

     <Button text = {"+1"} func = {increment} />

     <Button text = {"+10"} func = {increment10} />
     
    </div>
    )

}

export default Counter;