import React, { useState, useContext } from 'react'
import { Box, Button, TextField, styled, Typography } from '@mui/material'
import Logo from '../../Images/LogoUU.png'
import { API } from '../../service/Api'
import { DataContext } from '../../Context/DataProvider'
import { useNavigate } from 'react-router-dom';

const Component = styled(Box)`
    width:400px;
    marginTop:70;
    margin:auto;
    box-shadow:5px 2px 5px 2px rgb(0 0 0/0.6);
    background-color:#ffff;

`
const Image = styled('img')(
  {
    width: 100,
    margin: "auto",
    display: 'flex',
    padding: '50px 0 0'
  }
)

const Wrapper = styled(Box)`
    padding:25px 35px;
    display:flex;
    flex:1;
    flex-direction:column;
    &>div,&>button,&>p{
      margin-top:20px;
    }
  `
const LoginButton = styled(Button)`
   text-transform:none;
   background:#fb641b;
   color:#fff;
   height:48px;
   border-radius:2px;
  `
const SignUpButton = styled(Button)`
  text-transform:none;
   background:#fff;
   color:#2874f0;
   height:48px;
   border-radius:2px;
   box-shadow:0 2px 4px 0 rgb(0 0 0 / 20%);
   
  `
const Text = styled(Typography)`
  color:878787;
  
  `

const Error = styled(Typography)`
  font-size:10px;
  color:#ff6161;
  line-height:0;
  margin-top:10px;
  font-weight:600;
`
const signUpInitialValue = {
  name:'',
  username:'',
  password:''
}
const signinInitialValue = {
  username: '',
  password: ''
}

const Login = ({ isuserAuthenticated }) => {
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(signUpInitialValue);
  const [login, setLogin] = useState(signinInitialValue);
  const [error, setError] = useState('');
  const { setAccount } = useContext(DataContext)
  const navigate = useNavigate();

  const toggleSignUp = () => {
    account === 'login' ? toggleAccount('signup') : toggleAccount('login');

  }

  const onInputChange = (event) => {
    setSignup({ ...signup, [event.target.name]: event.target.value });
    //  console.log({...signup,[event.target.name]:event.target.value});
  }


  const onvalueChange = (event) => {
    //  console.log({...signIn,[event.target.name]:event.target.value});
    setLogin({ ...login, [event.target.name]: event.target.value });
  }
  const signupUser = async () => {

    let response = await API.userSignup(signup);
    if (response.isSuccess) {
      setError('');
      setSignup(signUpInitialValue);
      toggleAccount('login');
    }
    else {
      setError('Something went worng! Please try again later')
    }
  }

  const loginUser = async () => {
    const response = await API.userLogin(login);
    if (response.isSuccess) {
      setError('');

      sessionStorage.setItem("accessToken", `Bearer ${response.data.accessToken}`)
      sessionStorage.setItem("refreshToken", `Bearer ${response.data.refreshToken}`)

      setAccount({ username: response.data.username, name: response.data.name });
      isuserAuthenticated(true);
      navigate('/');

    }
    else {
      setError("Somthing went wrong! Please try again later.")
    }
  }

  return (
    <Component>
      <Box>
        <Image src={Logo} alt='UUPoint' />
        {account === 'login' ?
          <Wrapper>
            
            <TextField variant='standard' onChange={(event) => onvalueChange(event)} name='username' value={login.username} label="What's your username" />  
            <TextField variant='standard' onChange={(event) => onvalueChange(event)} name='password' value={login.password} label="What's your password" />
            
            {error && <Error>{error}</Error>}

            <LoginButton variant='contained' onClick={() => loginUser()}>Login</LoginButton>
            <Text style={{ textAlign: "center", color: 'black' }}>OR</Text>
            <SignUpButton onClick={() =>  toggleSignUp() } >Create an account</SignUpButton>
          </Wrapper>
          :
          <Wrapper>
            <TextField variant='standard' onChange={(event) => onInputChange(event)} name="name"     value={signup.name} label="What's your name" />
            <TextField variant='standard' onChange={(event) => onInputChange(event)} name="username" value={signup.username} label="What's your username" />
            <TextField variant='standard' onChange={(event) => onInputChange(event)} name="password" value={signup.password} label="What's your password" />
            {error && <Error>{error}</Error>}
            <SignUpButton onClick={() => signupUser()} >Signup</SignUpButton>
            <Text style={{ textAlign: "center", color: 'black' }}>OR</Text>
            <LoginButton variant='contained' onClick={() => toggleSignUp() } >Already have an account</LoginButton>
          </Wrapper>
        }

      </Box>
    </Component>
  )
}

export default Login