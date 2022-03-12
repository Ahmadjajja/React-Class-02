import React , {useState} from "react";
function Counter() {
    // let counter = 0;
    //more powerful variable than just simple variable like counter
    // const [state, setState] =useState(initialState)      //useState syntac
    let [counter2, setCounter] =useState(0)  //setCounter is a callBack function
    // let [name, setName] =useState("ahmad")            //useState examples here
    // let [age, setAge] =useState(18)
    // let [price, setPrice] =useState(3223)
    const incrementHandler = () => {
        // ++counter;
        setCounter(++counter2);
    }
    const decrementHandler = () => {
        if (counter2 > 0) {
            // --counter;
            setCounter(--counter2);
        }
    }
    const resetHandler = () => {
        if (counter2 > 0) {
            // counter  -= counter;
            counter2  -= counter2;
            setCounter(counter2);
        }
    }
    // console.log("counter Console",counter);
    // console.log("counter2=>>",counter2);
    return (
        <div style={{padding:50}}>
                {/* using simple variable <br />
                <button onClick={decrementHandler}> - </button>
                <span style={{padding:20}}>
                {counter}
                </span>
                <button onClick={incrementHandler} > + </button>

                <hr /> */}
                Using react State
                <br />
                <button onClick={decrementHandler}> - </button>
                <span style={{padding:20}}>
                {counter2}
                </span>
                <button onClick={incrementHandler} > + </button>
                <br />
                <button onClick={resetHandler}> reset </button>
        </div>
    );
    
}
export default Counter;


// state ?
//react will not render the component again if the variable value change
//state - condition - halat