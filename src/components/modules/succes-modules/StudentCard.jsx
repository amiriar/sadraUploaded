import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function StudentCard({ student , account , accountLink }) {
    return (
        <Card sx={{padding:"1.5rem", cursor:"pointer"}}>
            <CardMedia
                component="img"
                alt={student.name}
                height="250"
                image={student.titlePicture}
                sx={{borderRadius:"1rem", marginBottom:"1.5rem"}}
            />
            <CardContent sx={{margin:"0", padding:"0"}}>
                <Typography fontFamily={'Yekan,sans-serif'} variant="h6" component="div" sx={{textAlign:"center", fontSize:"1rem"}}>
                    {student.name}
                </Typography>
                <Typography fontFamily={'Yekan,sans-serif'} variant="subtitle1" color="text.secondary" sx={{textAlign:"center", fontSize:"0.875rem"}}>
                    {student.afterJob}
                </Typography>
                {/* {
                    account && (
                        <Typography fontFamily={'Yekan,sans-serif'} variant="subtitle1" color="text.secondary" sx={{textAlign:"center", fontSize:"0.875rem"}}>
                            <Link to={`${student.accountLink}`} >{student.account}</Link>
                        </Typography>
                    )
                } */}
            </CardContent>
        </Card>
    )
}

export default StudentCard