import React, { useState } from 'react';
import Button from '../../components/button/Button';
import "./createEvent.css"

const CreateEvent = () => {
    const [person, setPerson] = useState({
        eventName: "",
        hostName: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted")
    };

    return (
        <section className='create-section'>
            <form onSubmit={handleSubmit} className='main-form'>
                <h1>Create Event</h1>
                <div>
                    <div>Img</div>
                    <div>
                        <div>Upload Photo</div>
                        <div>Delete Photo</div>
                    </div>
                </div>

                <div>
                    <label htmlFor='eventName'>Event Name</label>
                    <input 
                        className='' 
                        type="text" 
                        placeholder="Event name" 
                        required 
                        name="eventname"  
                        value={person.eventName}
                        onChange={handleChange}

                    />
                </div>
                
                <div>
                    <label htmlFor='hostName'>Host Name</label>
                    <input 
                        className='' 
                        type="text" 
                        placeholder="host name" 
                        required 
                        name="name"  
                        value={person.hostName}
                        onChange={handleChange}

                    />
                </div>

                <div>
                    <label>Start Date</label>
                    <input className='' type="text" placeholder="Start Date" required name="name" value=""/>
                </div>

                <div>
                    <label>End Date</label>
                    <input className='' type="text" placeholder="End Date" required name="name" value=""/>
                </div>

                <div>
                    <label>Location</label>
                    <input className='' type="text" placeholder="End Date" required name="name" value=""/>
                </div>

                <Button  />
            </form>
        </section>
    )
}

export default CreateEvent;