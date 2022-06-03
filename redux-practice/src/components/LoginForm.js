// > css 
import styled from 'styled-components';

function LoginForm(){

    return(
        <>
            <Wrapper>
                <h1>회원정보</h1>
                <p>이름 : </p>
                <p>나이 : </p>
                <p>성별 : </p>
            </Wrapper>
        </>
    )
}

export default LoginForm;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;