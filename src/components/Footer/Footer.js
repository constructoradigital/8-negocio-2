import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa';

  import {
    FooterContainer,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
  } from './FooterElements';

  function Footer() {
    return (
      <FooterContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              <SocialIcon />
              
            </SocialLogo>
            <WebsiteRights>REDTEAMS © 2020</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href={
                  '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
                }
                rel='noopener noreferrer'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    );
  }
  
  export default Footer;
  