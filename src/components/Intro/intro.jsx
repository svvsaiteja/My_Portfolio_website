import React from 'react'
import './intro.css'
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id="intro">
          <div className="introContent">
              <span className='hello'>Hello,</span>
              <span className="intoText">I'm <span className="introName">Sai Teja</span><br />Web-Developer</span>
              <p className="intro-para">I am a web developer, I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
              <Link><button className="btn"><img src={btnImg} className='btnImg' alt="" />Hire Me</button></Link>
          </div>
        <img src="https://www.moxiedecksoftware.com/assets/images/about/web-development-company-in-pune.png" alt="" className="bg" />  
    </section>
  )
}

export default Intro;