import GoogleButton from "react-google-button"
import { useAuth } from "../context/AuthContext"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledTitle = styled.div`
    font-size: 6em;
    margin-bottom: 1.5em;
`

const Login = () => {
    const { login } = useAuth()

    return (
        <Container>
            <StyledTitle>Food Friends</StyledTitle>
            <GoogleButton onClick={async () => await login()} />
        </Container>
    )
}

export default Login