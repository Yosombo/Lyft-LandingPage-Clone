import React from 'react'
import css from './MoreInfo.module.css'
import crossImg from '../../assets/images/cross.png'
import starImg from '../../assets/images/star.png'

function MoreInfo() {
    return (
        <div className={css.MoreInfo}>
          <div className={css.Content}>
            <img src={crossImg} alt="cross"/>
            <div className={css.TextWrap}>
            <h2>Lyft Insurance Protection</h2>
            <div>Lyft provides additional insurance policies, at no cost to the driver. We worked with leading insurance carriers to provide various coverages including: commercial auto liability insurance up to $1M per occurrence, contingent comprehensive and collision insurance for drivers who carry comprehensive and collision coverage on their personal auto policy, and coverage for bodily injury caused by uninsured/underinsured motorists when you are engaged in a ride. If you already carry commercial insurance or personal coverage providing specific coverage for ridesharing, Lyft’s policy will continue to be excess to your insurance coverage. Please note, the above coverage may be modified to comply with local regulations or state laws. Our policy is available in all states in the U.S., except for those rides originating in New York City with a TLC</div>
          </div>
          </div>
          
          <div className={css.Content}>
            <img src={starImg} alt="star"/>
            <div className={css.TextWrap}>
            <h2>Passenger Ratings</h2>
            <div>Drivers rate passengers after each ride, so you’ve always got a say. We also require passengers to provide valid credit card information for identity verification purposes.</div>
          </div>
          </div>
        </div>
    )
}

export default MoreInfo
