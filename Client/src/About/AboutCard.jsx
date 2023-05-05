import styled from '@emotion/styled';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { Link, useParams } from 'react-router-dom';

import SerachBox from '../SerachBox';
import UnitButton from './Btech/Units/UnitButton';
import { UnitSemester6, UnitsUrls } from './Btech/Units/UnitsUrls';

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



const Text = styled(Typography)`
    color: #878787;
    font-size: clamp(10px, 1.5vw, 10px);
    text-align: justify;
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


const AboutCard = (props) => {
return (
    <>
      <Container>
            <Image src={url} alt={alt} />
            <Heading>{type}</Heading>
            <Text>{description}</Text>
            </Container>
    </>
  );
};

export default AboutCard;