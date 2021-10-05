import React from "react";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+8801674420630">
                        +8801674420630
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:howlader.mehedihassan@gmail.com">
                        howlader.mehedihassan@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>Don't stop until you achieve it.</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://github.com/hassan-mehedi">
                        <AiFillGithub size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://linkedin.com/in/howlader-mehedi">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://facebook.com/howlader.mehedi.hassan/">
                        <AiFillFacebook size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;
