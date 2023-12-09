import { useState } from "react";

const Counter = () => {
    const [no, setNo] = useState(0);

    const increment = () => {
        setNo(no + 1);
    }
    const decrement = () => {
        if(no > 0){
            setNo(no - 1);
        }
    }
    const reset = () => {
        setNo(0);
    }
    return(
        <center>
            <h1>Counter App</h1>
            <div class="d-flex align-items-center justify-content-center mt-5 ">
            <button onClick={ () => increment()} class="btn btn-success px-5 ">+</button>
            <span class="fs-3 mx-2 rounded px-5 " style={{backgroundColor:"pink"}}>{no}</span>
            <button onClick={ () => decrement()} class="btn btn-success px-5">-</button>
            </div>
            <div>
                <button  onClick={ () => reset()} class="btn btn-success px-5 mt-3">Reset</button>
            </div>
        </center>
    )
}

export default Counter;
