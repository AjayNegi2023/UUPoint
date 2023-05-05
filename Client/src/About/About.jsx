import React from 'react'
import { Box, styled, Typography, Link } from '@mui/material';
import { List, ListItem, ListItemText } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Container = styled(Box)`
// background-color:#ffff;
   height: 100%;
`


const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 10px;
   
    & > h3, & > h5 {
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;
const Heading = styled(Typography)`
    color: #915eff;
    // text-align:center;
`;

const About = () => {
  const features = [
    { text: 'Semester-wise notes and resources' },
    { text: 'User authentication and authorization' },
    { text: 'Responsive design for desktop and mobile' }
  ];
  return (
    <Container >
    <Banner/>
    <Wrapper>
     
        <Text variant="h3">PBL Project </Text>
        <Heading>Welcome to my project, a platform that provides notes and resources for Btech students. This project was created to help students improve their academic performance and achieve their goals. </Heading>
        <Text variant="h5">I am a 3rd-year student who is currently pursuing his B-Tech(2020-2024) at Uttaranchal Institute Of Technology Dehradun, Uttarakhand. I have a passion for web development and creating projects that solve real-world problems.<br />
                </Text>
                <Box>
                <Typography variant="h4">Reach out to me on</Typography>
                <Text variant="h5">
                If you are interested, you can view some of my favorite projects here
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/AjayNegi2023" color="inherit" target="_blank"><GitHub /></Link>
                    </Box><br/>

                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.linkedin.com/in/ajay-negi-852870243" color="inherit" target="_blank">
                            <LinkedInIcon />
                        </Link>
                    </Box>  
                    
                </Text>
                </Box>
        {/* <Typography variant="h5">Features</Typography>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemText primary={feature.text} />
          </ListItem>
        ))}
      </List> */}
        
        {/* <Typography variant="h5">About Me</Typography>

      <Typography variant="h5">Contact Me</Typography>
      <Typography variant="body1">Want to learn more about my project or connect with me? Email me at ajayn1803@gmail.com </Typography> */}

        
    </Wrapper>
   
</Container>
  )
}

export default About