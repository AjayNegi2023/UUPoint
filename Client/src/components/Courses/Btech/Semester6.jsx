import React from 'react'
import { semester6,semester4, semester5 } from './SubjectName'
import { Box, Grid } from '@mui/material'
import CourseCard from '../CourseCard'

const Semester6=(props)=> {
  const {SemId} =props

  return (
   <>
    {
              semester6.map((data, i) =>(
             <Grid item lg={3} sm={6} xs={12}  key={data.id}>
              {
                SemId === 6 ? <CourseCard key={i} cid={data.id} url={semester6[i].url} type={semester6[i].name} description={semester6[i].description} alt={semester6[i].alt} SemId={SemId}/>
                : 
                SemId===5 ?<CourseCard key={i} cid={data.id} url={semester5[i].url} type={semester5[i].name} description={semester5[i].description} alt={semester5[i].alt} SemId={SemId} />
                :
                SemId===4 ?<CourseCard key={i} cid={data.id} url={semester4[i].url} type={semester4[i].name} description={semester4[i].description} alt={semester4[i].alt} SemId={SemId} />
                :
                null
              }
             </Grid>
              ))
              }
   </>
  )
}

export default Semester6