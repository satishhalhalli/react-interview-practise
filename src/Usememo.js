import React,{useMemo, useState} from 'react'

const Usememo = () => {
    const[counter, setCounter] = useState(1);
    const[conter1, setCounter1] = useState(10)

    const incrementgandler=()=>{
        setCounter(counter + 1);
    }

    const decrement=()=>{
        setCounter1(conter1 - 1)
    }
    
const isEven = useMemo(() => {

    let i=0;
           while(i < 2000000000) i++
    return counter % 2 === 0;
  },[counter]);

   
  return (
    <div>
        <h1> {counter}</h1>
      <button onClick={incrementgandler}>increment</button>

     <span>
        { isEven ? "even" : "odd"}
     </span>
<button onClick={decrement}>decrement-{conter1}</button>
    </div>
  )
}

export default Usememo
