import React from 'react';
import eventimg from "../../assets/eventimg.png";
import { FaCalendarAlt } from '../../../node_modules/react-icons/fa';
import { FaMapMarkerAlt } from '../../../node_modules/react-icons/fa';
import "./eventPage.css";

const EventPage = () => {
    return (
        <section className='event-container'>

            <div className='left-box'>
                <div className='left-box-main'>
                    <div className='left-box-txt1'>Birthday Bash</div>
                    <div className='left-box-txt2'>Hosted by <strong>Elysia</strong></div>
                </div>
                
                <div className='event-main-date'>
                    <div className='event-icon'><FaCalendarAlt /></div>
                    <div>
                        <div className='event-txt1'>18 August 6:00pm</div>
                        <div className='event-txt2'>to 19 August 1:00PM UTC +10</div>
                    </div>
                </div>

                <div className='event-main-date'>
                    <div className='event-icon'><FaMapMarkerAlt /></div>
                    <div>
                        <div className='event-txt1'>Street name</div>
                        <div className='event-txt2'>Suburb, State, Postcode</div>
                    </div>
                </div>
            </div>
           
            <div>
                <img src={eventimg} alt='event-img' />
            </div>

            {/* <div className='right-box'>
                <div>
                    <div className='right-box-maintxt'>Imagine If <br /> 
                        <span className='snap'>Snapchat</span>  <br /> had events.
                    </div>
                    <div className='right-box-txt'>Easily host and share events with your friends <br /> across any social media.</div>
                </div>
                <Button />
            </div>

            <div>
                <img className='imgsize' src={heroimg} alt='hero-img' />
            </div> */}

        </section>
    )
}

export default EventPage;