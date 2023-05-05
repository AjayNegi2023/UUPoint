import React from 'react'
import { Box, Grid } from '@mui/material'
import CourseCard from '../../CourseCard';
import { units } from './UnitDetails';

const AllUnit=(props)=> {
  const {SemUId} = props;
  return (
   <>
   
    {
      
              units.map((data, i) =>(
               
             <Grid key={i} item lg={3} sm={4} xs={12}>
              <CourseCard key={i} Uurl={units[i].Uurl} Uname={units[i].Uname} description={units[i].Udescription} alt={units[i].Ualt} unit={true} UnitId={units[i].Uid} SemUId={SemUId}/>
                
               
             </Grid>
              ))
             
              }
   </>
  )
}

export default AllUnit