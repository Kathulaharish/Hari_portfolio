import React from "react"
import "./services.css";
import {HiOutlineCheck} from "react-icons/hi"

const Services = ()=>{
    return(
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            
            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UI/UX */}
                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Web Development */}
                <article className="service">
                    <div className="service_head">
                        <h3>Blockchain Technology</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                        <li>
                            <HiOutlineCheck className="service_list-icon"/>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF Content Creation */}
            </div>
        </section>
    )
}

export default Services;