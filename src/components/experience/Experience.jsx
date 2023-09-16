import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = ()=>{
    return(
        <section id="experience">
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Programming Languages</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>C and C++</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Solidity</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>SQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Core Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONTEND */}
                 
                <div className="experience_backcend">
                <h3>Tools and Technologies</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Blockchain Technology</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>MERN stack</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Bitcoin</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Ethereum</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Cryptography</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>Git & Github</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;