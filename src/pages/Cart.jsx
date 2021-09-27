
import { Add, Remove } from "@material-ui/icons"
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
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`


const ProductDetils = styled.div`
    flex: 2;
    display: flex;
`


const Image = styled.img`
    width: 200px;
`

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ProductName = styled.span``

const ProductId = styled.span``


const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=> props.color};
`

const ProductSize = styled.span``

const PriceDetails = styled.span`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`


const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1;
`

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
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmountContainer>2</ProductAmountContainer>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetails>
                                <Image src=""/>
                                <Details>
                                    <ProductName>
                                        <b>Product:</b>JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 123456789 
                                    </ProductId>
                                    <ProductColor />
                                    <ProductSize><b>Size:</b> 33 </ProductSize>
                                </Details>

                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <Add/>
                                    <ProductAmountContainer>2</ProductAmountContainer>
                                    <Remove/>
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ 80 </SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ 80 </SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ 80 </SummaryItemText>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemText>$ 80 </SummaryItemText>
                        </SummaryItem>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>    
        </Container>
    )
}

export default Cart
