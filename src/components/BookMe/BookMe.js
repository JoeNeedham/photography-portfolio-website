import React from 'react'
import './BookMe.css'

const BookMe = () => {
    return (
        <div className='main-container'>
        <div className='container'>
            <form className='form'>
                <h1>Contact Form</h1>

                <label>Name</label>
                <input placeholder='name' />

                <label>Email</label>
                <input placeholder='Email' />

                <label>Message</label>
                <textarea placeholder='Message'></textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
        <div className='picture-container'>
            <img src='./assets/picture23.jpg' alt='pic' />
        </div>
    </div>
    )
}

export default BookMe