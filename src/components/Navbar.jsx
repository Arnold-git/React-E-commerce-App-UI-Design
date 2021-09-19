import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;        
`;


const Wrapper = styled.div`
    padding: 10px 20px;
`;

const Left = styled.div`

`
const Center = styled.div`

`
const Right = styled.div`

`
    


function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>Left</Left>
                <Center>Right</Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
