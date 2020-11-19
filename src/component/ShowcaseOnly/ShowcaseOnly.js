import React from 'react'
import {Link} from 'react-router-dom'
import css from './ShowcaseOnly.module.css'
function ShowcaseOnly() {
    return (
        <div className={css.ShowcaseOnly}>
            <div className={css.ContentWrapper}>
                <div>Thank you for visiting my online portfolio</div>
                <div>This clone landing page is created for only showcase purpose.<div>Data you've entered will not be saved anywhere.</div>
                If you want to visit the original Lyft landing page,<a href="https://www.lyft.com/drive-with-lyft?utm_source=google&utm_medium=cpc&utm_campaign=PAID_DAX_SRCH_US_SFO_WEB_DESK_BRND_LYFT_BMM_2&adgroup=lyft_NA_NA&utm_term=%2Blyft&device=c&matchtype=b&targetid=kwd-25201277835&loc_physical_ms=9061271&loc_interest_ms=&network=g&devicemodel=&adposition=&campaign_id=10257686327&ad_id=444220890890&adgroup_id=99148786461&placement=&adname=WinTheRebound_AG-V4_061720_ETA&ref=SFO250017030P&gclid=Cj0KCQiAqdP9BRDVARIsAGSZ8AmWG3wSHDeeZ5Z1akNvjxNsr8aupWqcGt26dR7ZjZ5XU1B6FJktZWgaAtWgEALw_wcB" target="_blank" rel="noreferrer">click here</a>.</div>
                <Link to="/"><button>BACK</button></Link>
            </div>
        </div>
    )
}

export default ShowcaseOnly
