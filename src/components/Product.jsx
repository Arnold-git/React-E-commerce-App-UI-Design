import { Icon } from "@material-ui/core"
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"


const Container = styled.div`
    flex:1;
    margin: 5px;

`

const Circle = styled.div`

`
const Image = styled.img``
    
const Info = styled.div``
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
