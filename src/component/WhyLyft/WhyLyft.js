import React from 'react'
import css from './WhyLyft.module.css'
function WhyLyft() {
    return (
        <div className={css.WhyLyft}>
            <h2>Why Lyft?</h2>
            <div className={css.ContentWrapper}>
                <div className={css.Content}>
                    <div className={css.SvgWrapper}>
                        <svg enableBackground="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx={52} cy={50} r={10} /><path d="m78 28v-8h-68v44h8v8h68v-44zm0 36h-52v-28h52z" /></svg>
                    </div>
                    <h3>Keep Your Tips</h3>
                    <p>Earn tips from your passengers and keep the whole amount — they’re yours.</p>
                </div>
                <div className={css.Content}>
                    <div className={css.SvgWrapper}>
                <svg enableBackground="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m69.1 59.5c0-3.4-.8-10.6-14.3-14.4l-5.9-1.7c-4.5-1.2-4.8-3-4.8-3.9 0-2.3 2.1-3.8 5.5-3.8 3.8 0 5.8 1.8 5.8 4.3h12.6c0-7.4-6.1-12.9-14-14.3v-7.7h-1.1-5.8-1.1v7.6c-8.5 1.2-14.4 6.6-14.4 14.2 0 4.3 1.9 11.1 13.5 14l6.1 1.9c5.2 1.6 5.2 3.2 5.2 3.9 0 3-3.1 4.6-6.4 4.6-4.3 0-6.2-1.7-6.3-4.2h-12.8c0 7.4 5.8 12.5 15.1 13.7v8.3h1.1 5.8 1.1v-8.4c7.6-1 15.1-5.2 15.1-14.1z" /></svg>
                    </div>
                    <h3>Make More Money</h3>
                    <p>With increased Prime Time pricing during peak hours, you make more with Lyft.</p>
                </div>
                <div className={css.Content}>
                    <div className={css.SvgWrapper}>
                    <svg enableBackground="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m28 56c-11 0-20 9.2-20 20h40c0-10.8-9-20-20-20z" /><path d="m72 56c-11 0-20 9.2-20 20h40c0-10.8-9-20-20-20z" /><circle cx={28} cy={42} r={10} /><circle cx={50} cy={30} r={10} /><circle cx={72} cy={42} r={10} /></svg>
                    </div>
                    <h3>Best Community</h3>
                    <p>The Lyft community is full of awesome, friendly people — passengers and drivers alike.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyLyft
