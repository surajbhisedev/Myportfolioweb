import React from 'react'
import './skills.css'
const Skills = () => {
    return (
        <div className='main-skills-container'>
            <div className='skills-heading'>
                <p>Skills</p>
            </div>
            <div className='hr-skills'>
                <hr />
            </div>
            <div>
                <p>
                I possess a wide range of skills, both technical and soft, that make me a versatile professional in the tech industry. These include:
                </p>
            </div>

            <div>
                <div className='skill-progress'>
                    <div className="skills">
                        <div className="skill">
                            <span>
                                <label htmlFor="html">HTML</label> <label htmlFor="100%">100%</label>
                            </span>
                            <div className="progress-bar">
                                <div className="progress" id="html">100%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>
                                <label htmlFor="html">CSS</label> <label htmlFor="100%">90%</label>
                            </span>
                            <div className="progress-bar">
                                <div className="progress" id="css" >90%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>
                                <label htmlFor="html">Javascript</label><label htmlFor="100%">70%</label>
                            </span>
                            <div className="progress-bar">
                                <div className="progress" id="javascript" >70%</div>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="skill">
                            <span>
                                <label htmlFor="html">React</label> <label htmlFor="100%">80%</label>
                            </span>
                            <div className="progress-bar">
                                <div className="progress" id="react">80%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>
                                <label htmlFor="html">Python</label> <label htmlFor="100%">90%</label>
                            </span>
                            <div className="progress-bar">
                                <div className="progress" id="python" >90%</div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>
                                <label htmlFor="html">Node js</label> <label htmlFor="100%">90%</label>
                            </span>
                            <div className="progress-bar">
                                <div className="progress" id="node" >90%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills