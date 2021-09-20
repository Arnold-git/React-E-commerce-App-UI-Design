import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

`;


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(0vw)
`
const Slide = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    width: 100vw;
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 500px;
`;

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;

`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`



const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>SUMMER SALES</Title>
                    <Desc>DONT COMPROMISE ON STYLE GET 30% OFF FOR NEW ARRIVAL</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>WINTER SALES</Title>
                    <Desc> DONT COMPROMISE ON STYLE GET 30% OFF FOR NEW ARRIVAL </Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
                <Slide bg="f5fafd">
                <ImgContainer>
                    <Image src="https://i.ibb.co/XsdmR2c/1.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>SALES</Title>
                    <Desc>DONT COMPROMISE ON STYLE GET 30% OFF FOR NEW ARRIVAL</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined/>
            </Arrow>    
        </Container>
    );
}

export default Slider
