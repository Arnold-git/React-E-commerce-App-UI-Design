import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    flex: 1;
`
const Desc = styled.p`
    flex: 1;
`

const SocialContainer = styled.div`
    flex: 1;
`
const SocialIcon = styled.div`
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ARNOLD.DEV</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus eveniet vitae voluptates excepturi culpa, aliquam illo soluta asperiores, quos blanditiis ullam quis atque similique distinctio id minima architecto! Similique.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center></Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
