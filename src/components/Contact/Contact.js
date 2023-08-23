import React from 'react'
import './Contact.scss'
import { IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>please be in touch with us </span>
            <div className="email">
                <input type="text" placeholder='Enter your email ...'/>
                <button>JOIN US!</button>
            </div>
            <div className='icons'>
                <InstagramIcon />
                <TwitterIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <YouTubeIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact