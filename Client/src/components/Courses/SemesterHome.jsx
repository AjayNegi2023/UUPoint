import React from 'react'
import { Grid } from '@mui/material'
import Banner from '../banner/Banner'
import Semester6 from './Btech/Semester6';

import Categories from '../Categories/Categories';
const SemesterHome = (props) => {
    const {SemId} = props
    return (

        <>
            <div style={{ backgroundColor: 'white' }}>
                <Banner />
                <Grid container>
                    <Grid item lg={2} xs={12} sm={2}>
                        <Categories />
                    </Grid>
                    <Grid container item xs={12} sm={10} lg={10}>
                        <Semester6 SemId={SemId}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default SemesterHome