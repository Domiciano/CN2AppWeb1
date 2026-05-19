import { useState } from "react";

export default function Counter(){

    //let counter = 0;
    const [counter, setCounter] = useState(0);


    const handleAdd = ()=>{
        //setCounter(counter + 1);
        setCounter( (prev)=> prev+1 );
        setCounter( (prev)=> prev+1 );
        setCounter( (prev)=> prev+1 );
    }

    return (
        <>
            <h1>Contador con React</h1>
            <h2>{counter}</h2>
            <button onClick={handleAdd}>Incrementar</button>
        </>
    );
}