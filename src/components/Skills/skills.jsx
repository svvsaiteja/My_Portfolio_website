import React from 'react'
import './skills.css'
import Student from '../../assets/student.png'
import WebDeveloper from '../../assets/web-developer.avif'
import mL from '../../assets/machine-learning.webp'

const skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil possimus id assumenda quam veniam eius nam quidem quisquam, aliquam quae illum porro culpa distinctio vitae soluta sit debitis mollitia rem.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Student} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Student</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum minima? Non beatae, eos vel repellendus odio fuga nam! Molestias.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDeveloper} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web-Developer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum minima? Non beatae, eos vel repellendus odio fuga nam! Molestias.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={mL} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum minima? Non beatae, eos vel repellendus odio fuga nam! Molestias.</p>
                    </div>
                </div>
            </div>        
        </section>
  )
}

export default skills;