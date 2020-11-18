import React,{useState, useEffect, useRef} from 'react'
import Input from '../Input/Input'
import Phone from '../Phone/Phone'
import css from './Landing.module.css'
function Landing() {
    const [state, setState]=useState(true)
    const [txt, setTxt]=useState(`NEXT`)
    const contentRef=useRef()
    const content2Ref=useRef()
    const changeState=()=>{
        setState(!state)
    }
    useEffect(()=>{
       
    },[])

    useEffect(()=>{
        console.log(state);
        if(state===true){
                contentRef.current.style.display='block' 
                content2Ref.current.style.display='none'
                setTxt(`NEXT`) 
        } else{
            contentRef.current.style.display='none'
            content2Ref.current.style.display='block'
            setTxt(`SUBMIT`) 
        }
    },[state])

    return (

        <div className={css.Landing}>

                <div className={css.Content}>
                <h1 >Make $2,500 guaranteed in San Francisco</h1>
                <h4>Sign up to drive</h4>
                <div ref={contentRef}>
                <p>Let's start with your phone number - we'll text you a code to verify your phone.</p>
                <div className={css.Labelwrapper}>
                <label htmlFor="hasCar"><input type="radio" id="carChoice1" name="car" defaultValue="I have a car" />I have a car<span className={css.Checkmark}></span></label>
                <label htmlFor="needsCar"><input type="radio" id="carChoice2" name="car" defaultValue="I need a car" />I need a car<span className={css.Checkmark}></span></label>
                </div>
                <Phone/>
                <button onClick={changeState}>{txt}</button>
                </div>
                <div ref={content2Ref}>
                    <p>Great! We'll need some more information from you to get started.</p>
                    <div className={css.ConctactData} >
                    <Input type='text' value='First Name'/>
                    <Input type='text' value='Last Name'/>
                    <Input type='email' value='Email'/>
                    <Input type='city' value="City You'll drive"/>
                    <Input type='text' value='Promo/Refferal Code'/>
                    </div>
                    <button onClick={changeState}>{txt}</button>
                </div>
                <p>Already applied or already a driver?<br/>
                <span style={{textDecoration: 'underline', cursor: 'pointer'}}>Log in</span></p>
        
            </div>
        </div>
    )
}

export default Landing
