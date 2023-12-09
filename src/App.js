import React, {useEffect, useState } from 'react'
export default function App() {
  const [number, setNumber]=useState(1)
  const [text, setText]=useState("")
  useEffect(()=>{
   setNumber(0)
  }, [])
  const addNumber=()=>{
    setNumber(number+1)
    setText("qo'shish")
  }
  const removeNumber=()=>{
    setNumber(number-1)
    setText("ayirish")
  }
  return (
    <div className='wrapper'>
      <div className="box">
        <p className='text'>{text}</p>
        <h1 className='title'>{number}</h1>
        <div className="innerWrapper">
          <button className='btn' onClick={removeNumber}>remove</button>
          <button className='btn active' onClick={addNumber}>add</button>
        </div>
      </div>
    </div>

  )
}
// import React, { useEffect, useState } from 'react'
// import "./App.css"
// export default function App() {
//   const [number, setNumber]=useState(4)
//   const [text, setText]=useState("")
//   useEffect(()=>{
//     setNumber(0)
//   }, [])
//   const addNumber=()=>{
//     setNumber(number+1)
//     setText("qo'shish")
//   }
//   const removeNumber=()=>{
//     setNumber(number-1)
//     setText('ayirish')
//   }


//   return(
//     <div className='box'>
//    <div className="wrapper">
//      <h1>{number}</h1>
//      <button onClick={addNumber}>add</button>
//      <button onClick={removeNumber}>remove</button>
//      <p>{text}</p>
//    </div>
//     </div>
//   )
// }