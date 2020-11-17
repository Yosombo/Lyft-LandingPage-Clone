import React from 'react'
import WhatIsLyft from '../WhatIsLyft/WhatIsLyft'
import WhyLyft from '../WhyLyft/WhyLyft'
import css from './LyftInro.module.css'
function LyftInro() {
    return (
        <div className={css.LyftInro}>
            <WhatIsLyft/>
            <WhyLyft/>
        </div>
    )
}

export default LyftInro
