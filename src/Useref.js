import React, { useRef } from 'react'

const Useref = () => {
    const count=useRef(0)
    const clicked=()=>{
        count.current=count.current+1
        alert("button is clicked" + count.current )
    }

  return (
    <div>
    
      <button onClick={clicked}>clickMe</button>
    </div>
  )
}

export default Useref




const Useref = () => {
  let inp = useRef(0);

  const handleClick = () => {
    inp.current = 1000;
    
    alert("updated value" + inp.current);
  };

  return (
    <div>
      <input type='text' value={inp.current} />
      <button onClick={handleClick}>Input</button>
    </div>
  );
};

export default Useref;




const Useref = () => {
    let inp=useRef(0)

    const handleclick=()=>{
        inp.current.focus();
    }

  return (
    <div>
      <input ref={inp}/>
      <button onClick={handleclick}>input</button>
    </div>
  )
}

export default Useref

