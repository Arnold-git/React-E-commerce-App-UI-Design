import styled from "styled-components"
import { useState } from "react";
import { sliderItems } from "../data";

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    
`;



const Annoucement = () => {
    return (
        <Container>
            Super Deal Free Shipping on Orders over $50
        </Container>
    )
}

export default Annoucement
