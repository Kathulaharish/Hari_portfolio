import React from "react";
import "./about.css";
import ME from '../../assets/avatar1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderActive} from 'react-icons/vsc'

const About = ()=>{
    return(
        <section id="about">
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>3+ Months Working </small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clients</h5>
                            <small>100+ worldwide</small>
                        </article>

                        <article className="about_card">
                            <VscFolderActive className="about_icon"/>
                            <h5>Projects</h5>
                            <small>10+ completed Projects</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique officiis labore, laborum error asperiores autem dicta aliquam reprehenderit ex maiores quasi! Minus ea, voluptatum cum omnis reprehenderit inventore quas doloremque.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About;