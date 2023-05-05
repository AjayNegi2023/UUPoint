import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Btech } from "./Btech/SubjectName";

const StyleTable= styled(Table)`
border: 1px solid rgba(224,224,224,1);

`

const StyleButton= styled(Button)`
    margin: 20px;
    width: 85%;
    background: #000;
    color:#fff;
`
const CourseCategories =(props)=>{
   
    return(
            <> 
            
            <Link to='/' style={{textDecoration:'none'}}>
            <StyleButton variant="contained"> Semesters</StyleButton>
            </Link>
            <StyleTable >
                <TableHead>
                <TableRow>
                        <TableCell >All Categories</TableCell>
                </TableRow>
                </TableHead>

                <TableBody >
                    {
                        // Btech
                    Btech.map(category=>(
                            <TableRow key={category.id}>
                               
                                <TableCell >{category.name}</TableCell>// 
                            </TableRow>
                    ))
                    }
                    
                </TableBody>
            </StyleTable>
            
                

            </>
    )
}

// export default CourseCategories;