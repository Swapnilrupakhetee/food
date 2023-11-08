import React from 'react'

function Contact() {
  return (
    <div id='contact'>
        <h1>For any inquiry</h1>
        <form>
            <input type="text" placeholder='Full name' />
            <input type="text" placeholder='Email address' />
            <textarea placeholder='Write your message here !'></textarea>
            <input type="submit" value='BOOK'/> 
        </form>
    </div>
  )
}

export default Contact