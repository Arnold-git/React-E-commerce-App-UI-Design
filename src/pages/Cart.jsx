
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

`


const Botton = styled.div``


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
                <Bottom></Bottom>
            </Wrapper>
            <Footer/>    
        </Container>
    )
}

export default Cart
