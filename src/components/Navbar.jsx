import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;        
`;


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer; 
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none
`;

const Center = styled.div`
flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold
`

const Right = styled.div`
flex: 1;
`;
    


function Navbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center><Logo>ARNOLD.</Logo></Center>
                <Right>Right</Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
