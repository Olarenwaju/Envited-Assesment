import React from 'react';
import { Link } from 'react-router-dom';
import heroimg from "../../assets/heroimg.png"
import Button from '../../components/button/Button';
import "./hero.css";


const Hero = () => {
    return (
        <section className='container'>
            <div>
                <img className='imgsize' src={heroimg} alt='hero-img' />
            </div>

            <div className='right-box'>
                <div>
                    <div className='right-box-maintxt'>Imagine If <br /> 
                        <span className='snap'>Snapchat</span>  <br /> had events.
                    </div>
                    <div className='right-box-txt'>Easily host and share events with your friends <br /> across any social media.</div>
                </div>
                <Link to="/create"><Button /></Link>
                
            </div>
        </section>
    )
}

export default Hero;