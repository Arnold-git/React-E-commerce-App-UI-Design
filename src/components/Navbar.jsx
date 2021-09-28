import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from "../responsive";
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    height: 60px;        
`;


const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border: none
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    cursor: pointer;
`;

const Logo = styled.h1`
    font-weight: bold
    ${mobile({ fontSize: "24px" })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItems = styled.div`
    font-size: 12px;
    cursor: pointer;
    margin-left: 20px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
` 
    


const Navbar = () => {
  const history = useHistory()
  const signIn = () => {
    history.push("/login");
  }
  const product = () => {
    history.push("/product");
  }
  const cart = () => {
    history.push('/cart')
  }
  const productlist = () => {
    history.push('/productlist')
  }
  const register = () => {
    history.push("/register")
  }
  const home = () => {
    history.push("/")
  }
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={home}>ARNOLD.DEV</Logo>
        </Center>
        <Right>
          <MenuItems onClick={register}>REGISTER</MenuItems>
          <MenuItems onClick={signIn}>SIGN IN</MenuItems>
          <MenuItems onClick={product}>PRODUCT</MenuItems>
          <MenuItems onClick={productlist} >PRODUCT LIST</MenuItems>
          <MenuItems onClick={cart} >CHECKOUT</MenuItems>

          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar
