import styled from "styled-components";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Login = () => {
  const Router = useRouter();

  return (
    <LoginWrapper>

     <Link passHref href={'/login'}><LoginNavLinks active={Router.pathname == "/login" ? true : false} >
        Login/Signin
      </LoginNavLinks></Link>
    </LoginWrapper>
  )
}
const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 5px 5px;
  height: 50%;
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  margin-right: 10px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: small;
  cursor: pointer;
`;
const LoginNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv };
  height: 100%;
  font-family: 'Roboto';
  margin: 5px;
  border-radius: 10px;
  padding: 0 5px 0 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: small;
`


export default Login