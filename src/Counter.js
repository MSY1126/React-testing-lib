import React, {useState, useCallback} from "react";

const Counter = () => {
    const [number, setNumber] = useState(0);
// +1 누르면 증가 
    const onIncrease = useCallback(()=>{
        setNumber(number + 1);

    }, [number]);

// -1 누르면 감소
    const onDecrease = useCallback(()=>{
        setNumber(number - 1);

    }, [number]);


//  버튼에 따른 동작 (증가, 감소)
    return(
        <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
    )
   
}

export default Counter