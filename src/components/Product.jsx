import { Icon } from "@material-ui/core"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;


`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`
const Image = styled.img`
    height: 75%;
    z-index: 2;
`
    
const Info = styled.div`
    width: 100;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

`


const Icon = styled.div`` 

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
            </Info>
            
        </Container>
    )
}

export default Product
