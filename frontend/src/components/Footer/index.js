import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTiktok
} from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us</FooterLinkTitle>
                        <FooterLink to="/">Our story</FooterLink>
                        <FooterLink to="/">How it works</FooterLink>
                        <FooterLink to="/">Reviews</FooterLink>
                        <FooterLink to="/">Terms of Service</FooterLink>                   
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Contact Us</FooterLinkTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Work with us</FooterLink>                  
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Support</FooterLinkTitle>
                        <FooterLink to="/">FAQ</FooterLink>
                        <FooterLink to="/">User Guide</FooterLink>
                        <FooterLink to="/">Shipping</FooterLink>
                        <FooterLink to="/">Custom Options</FooterLink>                   
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">TikTok</FooterLink>                   
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Crafty
                    </SocialLogo>
                    <WebsiteRights>Crafty © {new Date().getFullYear()}
                    All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="TikTok">
                            <FaTiktok />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer