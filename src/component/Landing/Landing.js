import React from 'react'
import Phone from '../Phone/Phone'
import css from './Landing.module.css'
function Landing() {
    return (
        <div className={css.Landing}>

                <div className={css.Content}>
                <h1>Make $2,500 guaranteed in San Francisco</h1>
                <h4>Sign up to drive</h4>
                <p>Let's start with your phone number - we'll text you a code to verify your phone.</p>
                <div className={css.Labelwrapper}>
                <label htmlFor="hasCar"> <input type="radio" id="carChoice1" name="car" defaultValue="I have a car" />I have a car<span className={css.Checkmark}></span></label>
                <label htmlFor="needsCar"><input type="radio" id="carChoice2" name="car" defaultValue="I need a car" />I need a car<span className={css.Checkmark}></span></label>
                </div>
                <Phone/>
                <button>NEXT</button>
                <p>Already applied or already a driver?<br/>
                Log in</p>
        
            </div>

            </div>
    )
}

export default Landing
