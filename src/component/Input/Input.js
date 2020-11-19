import React,{useRef, useState} from 'react'
import css from './Input.module.css'
function Input(props) {
    const[state, setState]=useState('')
    const myRef2 = useRef();
    const modeChange =(e)=>{
        setState(e.target.value)
    }
    const transform =()=>{
        myRef2.current.style.top="0"
        myRef2.current.style.transform="translateY(-25%) scale(0.7)"
         }
    const transformReverse =()=>{
        myRef2.current.style.top="50%"
        myRef2.current.style.transform="translateY(-50%) scale(1)"
         }
    return (
      
            <div className={css.Wrapper}>
            <input type={props.type} onChange={modeChange} onFocus={transform} onBlur={state!=='' ? transform : transformReverse} className={css.PhoneField}/>
            <div ref={myRef2} className={css.PlaceHolder}>{props.value}</div>
            </div>
      
    )
}

export default Input
