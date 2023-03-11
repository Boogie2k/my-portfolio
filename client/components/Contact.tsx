import React from 'react'
import contactStyles from "../styles/Contact.module.css"
import {social} from '../data/social'
const Contact = () => {
  return (
    <section className={contactStyles.contact}>
        <h4 className={contactStyles.title}> Contact</h4>

       <h1 className={contactStyles.intro}> Get in touch with me today!</h1>

       <p className={contactStyles.paragraph}>If there is one thing I know how to do, it is developing something. 
        As an engineering and developer, developing new software, solving problems are things I love doing, I am always
        searching for opportunities to improve my skills learn new things and adapt to new technology, I am a fast learner and a team player
        if you have any project that you would like to get started do not hesitate to contact me. I promise I will not let you down.
       </p>


<br/>
       <a href='mailto:oghosabenjamin@gmail.com' target="_blank" className='btn btn-info'>CONTACT ME!</a>


       <ul className={contactStyles.socials}>
        {social.icons.map((icon:any) => {
          const { img, link } = icon;
          return (
            <li key={new Date().getTime()}>
              <a target="_blank" href={link}>
                {img}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

export default Contact