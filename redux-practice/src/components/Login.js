// > 
import styled from 'styled-components';

// > 
import { useDispatch } from 'react-redux';
import { login, logout } from '../redux/user';

function Login(){
    const dispatch = useDispatch();

    return (
        <>
            <Wrapper>
                <button onClick={() => {
                    dispatch(
                        login({ 
                            name: '김OO',
                            age: 29,
                            gender: '여'
                        })
                    )
                }}
                >로그인</button>
                <button onClick={() => {dispatch(logout())}}>
                    로그아웃
                </button>
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