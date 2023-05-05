import React from 'react'
import Banner from '../banner/Banner'
import Categories from '../Categories/Categories'
import { Grid } from '@mui/material'
import CreatePost from '../create/CreatePost'





const CourseHome= ()=>  {
  return (
    <>
    <div style={{backgroundColor: 'white'}}>
    <Banner/>
    
    <Grid container>
      <Grid item lg={2} xs={12} sm={2}>
      <Categories/>
      </Grid>
     <Grid container item xs={12} sm={10} lg={10}>
      <CreatePost/>
     </Grid>
     
    </Grid>
    
    </div>
   
    </>
  )
}

// export default CourseHome