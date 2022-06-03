// > 
import styled from 'styled-components';

function Login(){

    return (
        <>
            <Wrapper>
                <button>로그인</button>
                <button>로그아웃</button>
            </Wrapper>
        </>
    )
}

export default Login;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
`;