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

const 

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
                <Select>
                    <Option disabled selected >
                        Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected >
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
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
