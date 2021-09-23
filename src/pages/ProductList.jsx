import { Filter } from "@material-ui/icons"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Navbar from "../components/Navbar"



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


const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>filter</Filter>
                <Filter>filter2</Filter>               
            </FilterContainer>
        </Container>
    )
}

export default ProductList
