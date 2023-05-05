import styled from '@emotion/styled';
import { Box, Button, Typography } from '@mui/material';
import React, { useState , useEffect} from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Link, json } from 'react-router-dom';
import UnitButton from './Btech/Units/UnitButton';


const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 400px;
  
  & > img,
  & > p {
    padding: 0 5px 5px 5px;
  }

  
`;

const Image = styled('img')({
  width: '100%',
  objectFit: 'cover',
  borderRadius: '9px 9px 0 0',
  height: 200,
});

// const Box1 = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

const Text = styled(Typography)`
    color: #878787;
    font-size: clamp(10px, 1.5vw, 10px);
    text-align: justify;
`;

const SendButton = styled(Button)`
  margin: 10px auto;
//   @media (max-width:900px ) and (min-width:600px){
//     width:100px;
//   }

`;

const Heading = styled(Typography)`
  color: #878787;
  font-size: 20px;
  font-weight: 600;
  text-align:center;
  white-space: nowrap;

  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CourseCard = (props) => {
  const { url, type, description, alt, unit, cid } = props;
  const { Uid, Uurl, Uname, Udescription, Ualt } = props;
  const { SemId, UnitId } = props;
  const { SemUId } = props;
 
  

  
  return (
    <>
      <Container
     
      >
        {unit ? (
          <>
            <Image src={Uurl} alt={Ualt} />
            <Heading>{Uname}</Heading>
            {/* <Text>{Udescription} and No is {UnitId} </Text> */}
            <Box>
              {<UnitButton UnitId={UnitId} />}
            </Box>
          </>
        ) : (
          <>
            <Image src={url} alt={alt} />
            <Heading>{type}</Heading>
            <Text>{description}</Text>
            <Box>
              <StyledLink to={`/semester/${SemId}/${cid}/units`}>
                <SendButton
                  sx={{
                    width: {
                      xs: '100%',
                      sm: 'auto',
                      
                      
                     
                    },
                  }}
                  
                  variant="contained"
                  endIcon={<SendIcon />}
                  color="secondary"
                >
                  Go to course
                </SendButton>
              </StyledLink>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default CourseCard;