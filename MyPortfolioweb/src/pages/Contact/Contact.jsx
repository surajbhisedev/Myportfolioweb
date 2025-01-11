import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import './contact.css'
const Contact = () => {
  return (
    <div id='contact' className='contact-container'>
      <div>
        <h1>Contact</h1>
      </div>
      <div>
        <hr />
      </div>
      <div>
        <p>Have a project in mind or need assistance? Feel free to reach out!</p>
      </div>
      <div className='contact-container-last'>
        <div className='bgset'>
          <div>
            <div className='contact-indo-1-container'>
              <div className='contact-info-1'>
                <div className='circle'><CiLocationOn /></div>
                <div>
                  <span>
                    <h4>Address</h4>
                  </span>
                  <span>
                    <p>At Post Sawali Bk Tq jintur Dist Parbhani, 441510</p>
                  </span>
                </div>
              </div>

              <div className='contact-info-1'>
                <div className='circle'><IoCallSharp /></div>
                <div>
                  <span>
                    <h4>Call Us</h4>
                  </span>
                  <span>
                    <p>+91 9373284295</p>
                  </span>
                </div>
              </div>

              <div className='contact-info-1'>
                <div className='circle'><MdOutlineEmail /></div>
                <div>
                  <span>
                    <h4>Email Us</h4>
                  </span>
                  <span>
                    <p>sbhise906@gmail.com</p>
                  </span>
                </div>
              </div>
            </div>
            <div className='iframe-container'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d60102.78959891536!2d76.77980864999999!3d19.6945497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735991928775!5m2!1sen!2sin" ></iframe>
            </div>
          </div>
        </div>
        <div className='bgset'>
          <form action="">
            <div className='first-2-inputs'>
              <div>
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input type="email" />
              </div>
            </div>
            <div className='subject'>
            <label htmlFor="subject">Subject</label>
            <input type="text" />
            </div>
            <div className='message'>
              <label htmlFor="">Message</label>
              <input type="text" />
            </div>

            <div className='message-button'>
              <button>send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact