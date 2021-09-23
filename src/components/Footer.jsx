import { Facebook, Instagram, LinkedIn, Twitter } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    flex: 1;
`
const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex ;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;
const Title = styled.h3`
    margin-bottom: 30px;
`;


const List = styled.h3`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: ;
`;

const ListItem = styled.li`
    flex: 1;
    padding: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;




const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ARNOLD.DEV</Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem repellendus eveniet vitae voluptates excepturi culpa, aliquam illo soluta asperiores, quos blanditiis ullam quis atque similique distinctio id minima architecto! Similique.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="385999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <LinkedIn/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Link</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>WishList</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right></Right>
        </Container>
    )
}

export default Footer
