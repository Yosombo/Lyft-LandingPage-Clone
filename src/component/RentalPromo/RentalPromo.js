import React from 'react'
import css from './RentalPromo.module.css'
import wheel from '../../assets/images/wheel.png'
import pig from '../../assets/images/pig.png'
import compass from '../../assets/images/compass.png'
function RentalPromo() {
    return (
        <div className={css.RentalPromo}>
            <div className={css.Aligner}>
            <h2>Don't have a car?</h2>
            <h4>Get a flexible rental with Express Drive</h4>
            <div className={css.ContentWrap}>
                <div className={css.Content}>
                    <img src={wheel} alt="wheel"/>
                    <div>
                        <h3>Drive Your Way</h3>
                        <p>Get a car any time—and return it when you want after 7 days.</p>
                    </div>
                </div>
                <div className={css.Content}>
                    <img src={pig} alt="money pig"/>
                    <div>
                        <h3>Cut Costs</h3>
                        <p>Insurance and standard maintenance are always included.</p>
                    </div>
                </div>
                <div className={css.Content}>
                    <img src={compass} alt="compass"/>
                    <div>
                        <h3>Best Community</h3>
                        <p>Drive unlimited miles for Lyft and get extra miles for personal use.</p>
                    </div>
                </div>
            </div>
            <div className={css.Description}>The more you drive, the less you pay with all inclusive rentals designed to help you earn on your terms.<br/>
            Learn more</div>
            </div>
        </div>
    )
}

export default RentalPromo
