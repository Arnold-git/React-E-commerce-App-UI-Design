
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Container = styled.div``
const Wrapper = styled.div``
const Title = styled.div``
const Top = styled.div``
const Botton = styled.div``


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Wrapper>
                <Title>YOUR BAGS</Title>
                <Top></Top>
                <Bottom></Bottom>
            </Wrapper>
            <Footer/>    
        </Container>
    )
}

export default Cart
