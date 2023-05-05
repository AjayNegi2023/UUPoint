import React, { useState } from "react";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import { Link} from "react-router-dom";
import { Btech } from "../Courses/Btech/SubjectName";
import { units } from "../Courses/Btech/Units/UnitDetails";

const StyleTable = styled(Table)`
border: 1px solid rgba(224,224,224,1);

`

const StyleButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #000;
    color:#fff;
    
`
const StyledLink = styled(Link)`
text-decoration:none;
color:inherit;
`


const Categories = (props) => {
    const { unit } = props


    return (
        <>

            <StyleButton variant="contained" sx={{ width:{
                sm:'70px',
                md:'130px'
            }}}> Course</StyleButton>

            <StyleTable >
                <TableHead>
                    <TableRow>
                        <TableCell >
                            <StyledLink to='/courses'>All Categories</StyledLink>
                        </TableCell>
                    </TableRow>
                </TableHead>

                <TableBody >
                    {
                        unit ?
                            units.map((category,i) => (
                                <TableRow key={i}>
                                    <TableCell >
                                        <StyledLink>
                                            {category.Uname}
                                        </StyledLink>
                                    </TableCell>
                                </TableRow>
                            ))

                            :
                            Btech.map(category => (
                                <TableRow key={category.id}>
                                    <TableCell >

                                        <StyledLink
                                            to={`/Btech/semester${category.id}`}
                                        >
                                            {category.name}
                                        </StyledLink>
                                    </TableCell>
                                </TableRow>
                            ))
                    }

                </TableBody>
            </StyleTable>
        </>
    )
}

export default Categories;