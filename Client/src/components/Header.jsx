import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { styles } from '../Style'

const Component= styled(AppBar)`
    background: rgb(16 29 49 / 50%);
   
    
`
const Container = styled(Toolbar)`
    justify-content: center ;
    &>a{
        padding : 20px ; 
        text-decoration:none;
    }
`

const Header=()=> {
  return (
    <Component>
        <Container>
        
            <Link to='/'>Home</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Logout</Link>
          
        </Container>
    </Component>
  )
}

export default Header