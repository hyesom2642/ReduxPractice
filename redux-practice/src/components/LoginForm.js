// > css 
import styled from 'styled-components';

// > redux
import { useSelector } from 'react-redux';

function LoginForm(){
    const user = useSelector((state) => { return state.user.value});

    return(
        <>
            <Wrapper>
                <h1>회원정보</h1>
                <p>이름 : {user.name}</p>
                <p>나이 : {user.age}</p>
                <p>성별 : {user.gender}</p>
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