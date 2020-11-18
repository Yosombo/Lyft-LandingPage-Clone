import React,{useRef, useState} from 'react'
import css from './Phone.module.css'
import CurrencyFormat from 'react-currency-format';


function Phone() {
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
        <div className={css.Phone}>
            <div style={{
                position: "relative"}}>
            <CurrencyFormat onChange={modeChange} onFocus={transform} onBlur={state!=='' ? transform : transformReverse} className={css.PhoneField} format="(###) ###-####" mask=""/>
            <div ref={myRef2} className={css.PlaceHolder}>Mobile phone number</div>
            </div>
        <label className={css.Label}>
        <input type="checkbox"/>I agree to Lyft’s Terms of Service</label>
        </div>
        
    )
}

export default Phone