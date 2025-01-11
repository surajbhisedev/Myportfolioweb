import React from 'react'
import { LuShoppingBag } from "react-icons/lu";
import './services.css'
const Service = () => {
    return (
        <div className='services-container' id='service'>
            <div>
                <h3>Services</h3>
            </div>
            <div className='services-hr'>
                <hr className='hr' />
            </div>
            <div>
                <p>"Offering tailored web development, full-stack solutions, and advanced security services to help you build, optimize, and protect your digital presence."</p>
            </div>
            <div className='service-section-containers'>
                <div className='first-service-section'>

                    <div className="services">
                        <div className="service-circle">
                            <LuShoppingBag className="f-svg" />
                        </div>
                        <div className="service-info">
                            <div className="service-heading">
                                <h4>Web Security & Penetration Testing</h4>
                            </div>
                            <div>
                                <p>Protect your web applications with comprehensive security audits and penetration testing services. I specialize in identifying vulnerabilities and implementing solutions to safeguard your data and systems.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="services">
                            <div className="service-circle">
                                <LuShoppingBag className="f-svg" />
                            </div>
                            <div className="service-info">
                                <div className="service-heading">
                                    <h4>Full-Stack Development</h4>
                                </div>
                                <div>
                                    <p>From frontend design to backend development, I deliver end-to-end web solutions. With Node.js, PHP, and SQL, I build scalable and robust applications for any business size.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="services">
                            <div className="service-circle">
                                <LuShoppingBag className="f-svg" />
                            </div>
                            <div className="service-info">
                                <div className="service-heading">
                                    <h4>API Integration</h4>
                                </div>
                                <div>
                                    <p>Seamlessly integrate third-party services and APIs to enhance your application's functionality. I ensure smooth and secure connections for payment gateways, social platforms, and more</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='second-service-section'>
                    <div>
                        <div className="services">
                            <div className="service-circle">
                                <LuShoppingBag className="f-svg" />
                            </div>
                            <div className="service-info">
                                <div className="service-heading">
                                    <h4>Bug Bounty Consultation</h4>
                                </div>
                                <div>
                                    <p>With extensive experience in bug bounty programs, I offer insights into vulnerability identification and resolution. Let me help you improve your platform's security and resilience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="services">
                            <div className="service-circle">
                                <LuShoppingBag className="f-svg" />
                            </div>
                            <div className="service-info">
                                <div className="service-heading">
                                    <h4>Freelance Projects</h4>
                                </div>
                                <div>
                                    <p>Available for freelance opportunities to deliver custom solutions, whether it's building a website, improving application security, or developing unique tools for your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="services">
                            <div className="service-circle">
                                <LuShoppingBag className="f-svg" />
                            </div>
                            <div className="service-info">
                                <div className="service-heading">
                                    <h4>Custom Web Development</h4>
                                </div>
                                <div>
                                    <p>I design and develop modern, responsive, and user-friendly websites tailored to your business needs. My expertise in HTML, CSS, JavaScript, and React.js ensures every project is unique and functional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service