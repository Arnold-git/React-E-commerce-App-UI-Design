import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Annoucement from "../components/Annoucement"
import { Filter, Title } from "@material-ui/icons"

const Container = styled.div``

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div``


const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;


const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;

`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div``
const FilterContainer = styled.div``
const FilterContainer = styled.div``
const FilterContainer = styled.div``
const FilterContainer = styled.div``
const FilterContainer = styled.div``






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
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
