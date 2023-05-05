import React, { useState,useEffect } from 'react'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';

import {UnitsUrls } from './UnitsUrls';


const SendButton=styled(Button) `
margin:10px auto;
`;
const Heading = styled(Typography)`
color: #878787;
    font-size: 25px;
    font-weight: 600
`;
const  UnitButton = (props)=>{
    const {UnitId } = props;
    const { Sid,cid } = useParams();
    const [url ,setUrl ] = useState('')
  
    // console.log("Unit id is "+ UnitId);

    useEffect(()=>{
    Object.keys(UnitsUrls).map((semesterKey,semesterIndex) => (
        Object.keys(UnitsUrls[semesterKey]).map((unitKey, unitIndex) => (
            Object.keys(UnitsUrls[semesterKey][unitKey]).map((urlKey, urlIndex) => (
                    Sid==="6"  && UnitId===urlIndex+1 ? setUrl(UnitsUrls.semester6[cid].unit[urlIndex+1])
                    :
                    Sid==="5"  && UnitId===urlIndex+1 ? setUrl(UnitsUrls.semester5[cid].unit[urlIndex+1])
                    :
                    Sid==="4"  && UnitId===urlIndex+1 ? setUrl(UnitsUrls.semester4[cid].unit[urlIndex+1])
                    :
                    null
                  
                
            )) 
        ))
    ))
    },[Sid, cid, UnitId])

    // useEffect(() => {
    //     Object.keys(UnitsUrls).map((semesterKey, semesterIndex) => (
    //       Object.keys(UnitsUrls[semesterKey]).map((unitKey, unitIndex) => {
    //        Sid=="6" && (unitKey === cid) 
    //           Object.keys(UnitsUrls[semesterKey][unitKey]).map((urlKey, urlIndex) => {
    //             if (urlIndex + 1 === UnitId) {
    //               setUrl(UnitsUrls[semesterKey][unitKey][urlKey]);
    //             }
    //           });
            
    //       })
    //     ));
    //   }, [Sid, cid, UnitId]);

    return (
        <>
     {/* <div>
     <Heading> {semes}</Heading>
     </div> */}
    <SendButton 
    
    href={url}
    target="_blank"
                sx={{width:{
                    xs:120,
                    sm:140,
                    md:180,
                    lg:200,
                    
                }}
            }

                variant="contained" endIcon={<SendIcon />} color='secondary' >Get Content</SendButton>
   </>
  )

}

export default UnitButton