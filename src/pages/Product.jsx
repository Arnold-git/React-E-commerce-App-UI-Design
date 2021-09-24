import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Annoucement from "../components/Annoucement"
import { Title } from "@material-ui/icons"

const Container = styled.div``
const Wrapper = styled.div``
const ImgContainer = styled.div``
const Image = styled.img``
const InfoContainer = styled.div``
const Title = styled.div``
const Desc = styled.div``
const Price = styled.div``







const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Wrapper>
                <ImgContainer>
                    <Image src=""/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Best Deal youc can get</Title>
                    <Desc>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos dolorem facere eligendi incidunt magni repellat possimus? Possimus, tempora nobis. Vero quod quo quam sed doloremque veniam qui porro provident veritatis.
                    </Desc>
                    <Price> $20</Price>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
