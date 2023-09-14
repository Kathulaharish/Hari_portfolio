import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaYoutubeSquare} from "react-icons/fa"

function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/kathula-harish-2585b5239/?originalSubdomain=in" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/Kathulaharish" target='_blank'><FaGithub/></a>
        <a href="https://www.youtube.com/watch?v=NfE8G8v_qZM"><FaYoutubeSquare/></a>
    </div>
  )
}

export default HeaderSocials