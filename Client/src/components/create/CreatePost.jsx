import React from 'react'
import { Box, Grid } from '@mui/material'
import CourseCard from '../Courses/CourseCard'

import { semester6 } from '../Courses/Btech/SubjectName'


const CreatePost=()=> {
    
  return (
    <>
   
        {
              semester6.map((data, i) =>(
             <Grid item lg={3} sm={4} xs={12}>
              {/* <CourseCard key={data.id} url={categories[i].url} type={categories[i].type} description={categories[i].description} alt={categories[i].alt}/> */}
              <CourseCard key={data.id} url={semester6[i].url} type={semester6[i].type} description={semester6[i].description} alt={semester6[i].alt}/>
             
            </Grid>
              ))
              }
    
    
   
    </>
  )
}

export default CreatePost