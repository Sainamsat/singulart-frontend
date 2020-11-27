import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';
import {
  FooterLink,
  SocialLogo,
} from './FooterElements';

import './index.css';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className = 'FooterContainer'>
      <div className='FooterWrap'>
        <div className='FooterLinksContainer'>
          <div className='FooterLinksWrapper'>
            <div className='FooterLinkItems'>
              <h1 className='FooterLinkTitle'>About Us</h1>
              <FooterLink to='/'>How It Works?</FooterLink>
              <FooterLink to='/artists'>Artists</FooterLink>
              <FooterLink to='/'>Founders</FooterLink>
              <FooterLink to='/'>Terms Of Service</FooterLink>
            </div>
            <div className='FooterLinkItems'>
              <h1 className='FooterLinkTitle'>Contact Us</h1>
              <FooterLink to='/'>Contact</FooterLink>
              <FooterLink to='/'>Support</FooterLink>
              <FooterLink to='/'>FAQs</FooterLink>
              <FooterLink to='/'>Feedback</FooterLink>
            </div>
          </div>
          <div className='FooterLinksWrapper'>
            <div className='FooterLinkItems'>
              <h1 className='FooterLinkTitle'>Arts</h1>
              <FooterLink to='/'>Submit photo</FooterLink>
              <FooterLink to='/'>Suggestions</FooterLink>
              <FooterLink to='/'>Company</FooterLink>
              <FooterLink to='/'>Influencer</FooterLink>
            </div>
            <div className='FooterLinkItems'>
              <h1 className='FooterLinkTitle'>Extra</h1>
              <FooterLink to='/'>Extra</FooterLink>
              <FooterLink to='/'>Extra</FooterLink>
              <FooterLink to='/'>Extra</FooterLink>
              <FooterLink to='/'>Extra</FooterLink>
            </div>
          </div>
        </div>
        <section className='SocialMedia'>
          <div className='SocialMediaWrap'>
            <SocialLogo to='/' onClick={toggleHome}>
              Singulart
            </SocialLogo>
            <small className='WebsiteRights'>
              Singulart © {new Date().getFullYear()} All rights reserved.
            </small>
            <div className='SocialIcons'>
              <a className='SocialIconLink' href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </a>
              <a className='SocialIconLink' href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </a>
              <a className='SocialIconLink' href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </a>
              <a className='SocialIconLink' href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </a>
              <a className='SocialIconLink' href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;

