import React, {useState,useRef, useEffect} from 'react'
import css from './Question.module.css'
function Question(props) {
    const answerRef=useRef()
    const [toggle, setToggle]=useState('none')
    const [x, SetX]=useState(`+`)

    const toggleAsnwer=()=>{
      if(toggle==='none'){
        setToggle('block')
        SetX(`-`)
      } else {
       setToggle('none')
       SetX(`+`)
      }
    }

    useEffect(()=>{
        answerRef.current.style.display=toggle
    },[toggle])

    return (
        <div className={css.QuestionWrapper} >
        <div className={css.TextWrapper}>
    <div className={css.Question}>{props.title}</div>
    <div className={css.Answer} ref={answerRef}>{props.text}</div>
        </div>
    <button onClick={toggleAsnwer}><div className={css.X}>{x}</div></button>
    </div>
    )
}

export default Question
