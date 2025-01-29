import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact__section'>
      <div className="common_section">
        <h1>Contact</h1>
      </div>
      <div className="contact__container">
        <div className="contact_right">
            <div className="contact_title">
                <h1>Contact Information</h1>
                <p>Feel free to reach out. Our team is always ready to assist you with any inquiries.</p>
            </div>
            <div className="contact_info">
                <div className="contact_info_left">
                    <h2>Shop</h2>
                    <ul>
                        <li>730 Glenstone Ave 65802, Springfield, US</li>
                        <li>+91 9474196910</li>
                        <li>+91 9531673959</li>
                        <li>lazylevel2@gmail.in</li>
                    </ul>
                </div>
                <div className="contact_info_right">
                    <h2>Management</h2>
                    <ul>
                        <li>730 Glenstone Ave 65802, Springfield, US</li>
                        <li>+91 9474196910</li>
                        <li>+91 9531673959</li>
                        <li>lazylevelshop@gmail.in</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="contact_left">
            <h1>Get in Touch</h1>
            <p>Use the form below to get in touch with us.</p>
            <div className="contact_form">
                <form>
                    <div className="form_group">
                        <input type="text" placeholder="Your Name" required/>
                        <input type="email" placeholder="Your Email" required/>
                    </div>
                    <input type="number" placeholder='Phone Number' />
                    <input type="text" placeholder='Write your subject here' />
                    <textarea 
                        placeholder='Write your message here' 
                        required 
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
