import React, {useState, useEffect, useRef} from 'react'
import css from './HowWorks.module.css'
import bg from '../../assets/images/bg_img.6c6e8a21.jpg'
import phoneFrame from '../../assets/images/phone.png'
import wal1 from '../../assets/images/wal1.jpg'
import wal2 from '../../assets/images/wal2.jpg'
import wal3 from '../../assets/images/wal3.jpg'
import wal4 from '../../assets/images/wal4.jpg'
function HowWorks() {
    const sliderArr=[wal1, wal2, wal3, wal4]
    const titleArr=[1, 2, 3, 4]
    const textArr=[
        `Open the app and turn on driver mode.`, 
        `Accept a ride request.`, 
        `Pick your passenger`,
        `Once the ride ends, the app processes pay from the passenger’s saved credit card.` ]
    const [x, SetX]=useState(0)
    const[y, SetY]=useState(0)
    const dotRef = useRef()
    const autoPlayRef = useRef()
    const goLeft=()=>{
     if(x === 0){ 
         SetX(-100*(sliderArr.length-1))
         SetY(3)
        }
     else {
         SetX(x+100)
         SetY(y-1)
        }
    }
    const goRight=()=>{
        if(x === -100*(sliderArr.length-1)){
            SetX(0)
            SetY(0)
        } else {
            SetX(x-100)
            SetY(y+1)
        }
    }
 const interval=(e)=>{
    setInterval(e, 3000)
 }


    useEffect(()=>{
        autoPlayRef.current= goRight
    })
    
    useEffect(()=>{

        const play =()=>{
            autoPlayRef.current()
        }
     interval(play)

    },[])
    useEffect(()=>{   
    const dots = Object.entries(dotRef.current.children)
    dots.forEach(e=>{
        e[1].style.background="#fff"
    })
    dotRef.current.children[y].style.background="#000"
    },[y])

    return (
        <div className={css.HowWorks}>
                <div className={css.BackgroundImg} style={{backgroundImage: `url(${bg}`}}></div>
            <div className={css.SliderWrapper}>
                <div className={css.PhoneAligner}>
                <div className={css.Phone} style={{backgroundImage: `url(${phoneFrame}`}}>
                    <div className={css.phoneDisplayAligner}>
                    <div className={css.phoneDisplay}>
                        {
                            sliderArr.map((item, index)=>{
                                return(
                                    <div key={index} className={css.ScreenShot} style={{ transform: `translate(${x}%)`}}>
                                        <img src={item} alt=""/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
                </div>
                </div>
                        
                <div onClick={goLeft} className={css.Left}>
                    <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="4em" width="4em" viewBox="0 0 64 64" className="_2E9WVS egbRub" style={{verticalAlign: 'middle'}}><g><path d="M38.49 20.944l-2.06-2.18L22.234 32.19l14.023 13.3 2.065-2.176-11.725-11.121z" /></g></svg>
                </div>
                <div onClick={goRight} className={css.Right}>
                    <svg fill="currentColor" preserveAspectRatio="xMidYMid meet" height="4em" width="4em" viewBox="0 0 64 64" className="_2E9WVS egbRub" style={{verticalAlign: 'middle'}}><g><path d="M38.49 20.944l-2.06-2.18L22.234 32.19l14.023 13.3 2.065-2.176-11.725-11.121z" /></g></svg>
                </div>

                <div ref={dotRef} className={css.Dots}>        
                    {
                        sliderArr.map((item, index)=>{
                            return(
                                <div key={index} className={css.Dot}>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={css.ToFlexDescription}>
                    <div className={css.Title}>How Lyft Driving Works</div>
                    <div className={css.Description}>
                    <h3>STEP {titleArr[y]}</h3>
                        <p>{textArr[y]}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWorks
