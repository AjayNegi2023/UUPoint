import React from 'react'
import { Grid } from '@mui/material'
import Banner from '../../../banner/Banner';


import Categories from '../../../Categories/Categories';
import AllUnit from './AllUnit';
const UnitHome = (props) => {
    const {SemUId, id} = props



    return (

        <>
            <div style={{ backgroundColor: 'white' }}>
                <Banner />
                <Grid container>
                    <Grid item lg={2} xs={12} sm={2}>
                        <Categories  unit={true}/>
                    </Grid>
                    <Grid container item xs={12} sm={10} lg={10}>
                        <AllUnit SemUId ={SemUId}/>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default UnitHome