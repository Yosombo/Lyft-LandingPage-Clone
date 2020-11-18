import React from 'react'
import Question from '../Question/Question'
import css from './Questions.module.css'

function Questions() {
    const texts=[
        [
            <div>Is driving for Lyft affected by COVID-19?</div>,
            <div>We’re monitoring the COVID-19 situation closely, and taking action based on guidance from the Centers for Disease Control and Prevention (CDC), the World Health Organization (WHO), and local and federal officials.
            <br/><br/>
            We remain operational across North America except in a select few locations where we've received alternate guidance from local and federal officials.
            <br/><br/>
            Even in communities where local officials have asked residents to shelter in place, rides on the Lyft platform continue to help people meet their essential needs, such as grocery shopping or picking up medication.
            <br/><br/>
            For the latest updates and information about Lyft’s response to COVID-19, and what we’re doing to support drivers.</div>
        ],
        [
            <div>How long does the application process take?</div>,
            <div>Typically, filling out basic information (like your mobile phone number, driver’s license, and other documents) takes less than 30 minutes. Then a few more things need to happen:
            <br/><br/>
            <strong>Vehicle Inspection:</strong> If you’re using your own car, it will need to pass a Lyft inspection to make sure it’s road-ready. We’ll help you find a location and schedule an appointment.
            <br/><br/>
            <strong>Background check:</strong> Safety is our top priority, so we’ll need to run a background check to review your driving history. This can take a few days to be completed.</div>
        ],
        [
            <div>When and where should I drive?</div>,
            <div>The Lyft Driver app is your key to success, with real-time info and features that make earning easy:
            <br/><br/>
            <strong>Hourly ride predictions</strong> for each day — you’ll get an overview of the best times to drive and where passengers need rides
            <br/><br/>
            <strong>Available bonuses</strong> for the week
            <br/><br/>
            <strong>Local events</strong> (and earning opportunities), if applicable, that are happening nearby</div>
        ],
        [
            <div>Is Lyft safe?</div>,
            <div>At Lyft, we’re committed to driver and passenger safety. We’ve got your back before, during, and after the ride.
            <br/><br/>
            <strong>24/7 support:</strong> Easily contact our support team for reliable, around-the-clock help by phone or email, with any issues on and off the road.
            <br/><br/>
            <strong>Emergency assistance:</strong> You always have the ability to contact 911 directly from your app.
            <br/><br/>
            <strong>Insurance:</strong> Our car insurance has your back — from the moment you switch into driver mode until you drop off your last passenger of the day.</div>
        ],
        [
            <div>How do I get paid?</div>,
            <div>our pay is based on the time and distance of a ride (and you keep 100% of your tips, of course). All payments are made through the Lyft Driver app weekly, so you’ll need to add your banking info to get paid. You can also set up Express Pay to cash out when you want.</div>
        ],
        [
           <div>What is driving really like?</div>,
           <div>It can vary from city to city. To give you a better sense of what driving with Lyft is like, watch the full video of a new driver during their first week.</div>
        ],
        [
            <div>What about the wear and tear on my car?</div>,
            <div>We’re expanding Lyft Driver Centers, Lyft Mobile Service, and our Openbay partnership to lower the costs of vehicle service. Or you can rent a car through our Express Drive program.</div>
        ],
        [
            <div>What documents are required?</div>,
            <div>Application requirements can vary by city. Find yours here for more information.</div>
        ]
    ]
    return (
        <div className={css.Questions}>
            <h1>Frequently Asked Questions</h1>
            <div className={css.TextAligner}>
                {
                      texts.map((item, index)=>{
                        return(
                      <Question key={index} title={item[0]} text={item[1]}/>
                      )
                    })
                }
            </div>
        </div>
    )
}

export default Questions
