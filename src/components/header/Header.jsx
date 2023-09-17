import React from "react";
import "./header.css";
import CTA from "./CTA"
import ME from "../../assets/avatar1.jpg"
import HeaderSocial from "./HeaderSocials"

const Header = ()=>{
    return(
        <header>
            <div className="container header_container">
                <h5>Hello I'm</h5>
                <h1>Kathula Harish</h1>
                <h5 className="text-light">I am eager to embark on a career that allows me to explore the dynamic world of full-stack
development and leverage blockchain’s innovative capabilities. My enthusiasm for staying updated
with the latest advancements in these fields drives my commitment to continuous learning and
contributing to cutting-edge projects</h5>
                <CTA/>
                <HeaderSocial/>

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;