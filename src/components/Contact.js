import React from 'react'
import SocialMediaCard from './SocialMediaCard';

function Contact() {

  const data = [
    {
      iconClass: 'fa-solid fa-envelope',
      mediaName: 'Email',
      mediaValue: 'seeratalyshah@gmail.com',
      hrefLink: 'mailto:seeratalyshah@gmail.com',
      actionName: 'Send a message'
    },
    {
      iconClass: 'fa-brands fa-facebook-messenger',
      mediaName: 'Messenger',
      mediaValue: 'seerat ali',
      hrefLink: 'mailto:seeratalyshah@gmail.com',
      actionName: 'Lets inbox'
    },
    {
      iconClass: 'fa-brands fa-whatsapp',
      mediaName: 'Whats app',
      mediaValue: '+92-3112233',
      hrefLink: 'mailto:seeratalyshah@gmail.com',
      actionName: 'Whats app me'
    },
  ];
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="social-media-cards">
          {
            data.map((data, index)=>{
              return <SocialMediaCard iconClass={data.iconClass} mediaName={data.mediaName} mediaValue={data.mediaValue} hrefLink={data.hrefLink} actionName={data.actionName} />
            })
          }
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' className='contact-form-input' />
          <input type="email" name='email' placeholder='Your email' className='contact-form-input' />
          <textarea name="message" id="message" rows="10" className='contact-form-textarea' placeholder='Enter your message'></textarea >
          <button className='btn btn-primary' type='submit'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;