import { Filter } from "@material-ui/icons"
import styled from "styled-components"
import Annoucement from "../components/Annoucement"
import Navbar from "../components/Navbar"



const Container = styled.div``



const ProductList = () => {
    return (
        <Container>
            <Navbar/>
            <Annoucement/>
            <Title></Title>
            <FilterContainer>
                <Filter>

                </Filter>
            </FilterContainer>
        </Container>
    )
}

export default ProductList
