import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"



const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`


const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.div`
    font-size: 20;
    font-weight: 600;
`


const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products</FilterText>
                </Filter>
                <Filter>
                    <FilterText>Sort Products</FilterText>
                </Filter>             
            </FilterContainer>
            <Products />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
