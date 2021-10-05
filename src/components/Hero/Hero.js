import React from "react";

import {
    Section,
    SectionText,
    SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <SectionTitle main center>
                    Welcome To <br />
                    My Personal Portfolio
                </SectionTitle>
                <SectionText>
                    I love coding and developing websites and am looking for
                    more opportunities to work in a professional environment.
                </SectionText>
                <Button onClick={props.handleClick}>My CV</Button>
            </LeftSection>
        </Section>
    </>
);

export default Hero;
