import { styled } from "@material-ui/styles"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ),
    url("https://images.unsplash.com/photo-1577546568088-eb32790be7ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80");
        center;


    background-color: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
    background-color: white;


`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;

`


const Register = () => {
    return (
        <Container>
            <Wrapper >
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with thr <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`


const Agreemet = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`


const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
`



const Register = () => {
    return (
        <Container>
            <Wrapper >
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name"/>
                    <Input placeholder="last name"/>
                    <Input placeholder="username"/>
                    <Input placeholder="email"/>
                    <Input placeholder="password"/>
                    <Input placeholder="confirm password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with thr <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
