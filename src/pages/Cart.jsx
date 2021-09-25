
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Container = styled.div``


const Wrapper = styled.div`
    padding: 20px;
`


const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
`
const TopTexts = styled.div``

const TopText = styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
`


const Botton = styled.div``

const Info = styled.div`
    flex: 3;
`
const Product = styled.div``
const ProductDetils = styled.div``
const Image = styled.div``
const Details = styled.div``
const ProductName = styled.div``
const ProductId = styled.div``
const ProductColor = styled.div``
const ProductSize = styled.div``



const Summary = styled.div`
    flex: 1;
`
    


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Wrapper>
                <Title>YOUR BAGS</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Shopping Bag(0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>info
                        <Product>
                            <ProductDetails>
                                <Image src=""/>
                                <Details>
                                    <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                    <ProductId><b>ID:</b> 123456789 </ProductId>
                                    <ProductColor />
                                    <ProductSize><b>Size:</b> 33 </ProductSize>
                                </Details>

                            </ProductDetails>
                            <PriceDetails>
                                Price
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer/>    
        </Container>
    )
}

export default Cart
