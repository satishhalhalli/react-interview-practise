// import React, { useEffect, useState } from 'react'

// const Useeffect = () => {
//     const[counter, setCounter]=useState(0);

//     useEffect(()=>{
//       const increment=setInterval(()=>{
//        setCounter(prevCounter=> prevCounter + 1);
//       },5000)

//       return(()=>{
//         clearInterval(increment)
//       })
//     },[])

    
//   return (
//     <div>
//       <button>{counter}</button>
//     </div>
//   )
// }

// export default Useeffect


import React, { useEffect, useState } from 'react'

const Useeffect = () => {

    const [isVisible,setIsVisible]=useState(true)

    useEffect(()=>{

    const timer=setTimeout(()=>{
       setIsVisible(false)
    },5000)
 

    return(()=>{
        clearTimeout(timer)
        console.log("unmounted")
    })
    },[])
  return (
    <div>
     <h1>{isVisible ? "im satish" : " im sneha"}</h1>
    </div>
  )
}

export default Useeffect

