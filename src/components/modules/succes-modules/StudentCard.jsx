import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function StudentCard({ student , account , accountLink, isAdmin }) {

    const edithandler = () => {
        alert("این قابلیت درحال ساخت میباشد.")
    }
    const deleteHandler = async () => {
        alert("این قابلیت درحال ساخت میباشد.")
    }
    
    const newPath = student.titlePicture?.filePath?.split("/").splice(1).splice(1).join("/");
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
                {
                    isAdmin &&
                    
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <br />
                        <Divider/>
                        <br />
                        <Button variant="contained" sx={{
                            backgroundColor: "#d5745b",
                            width:"fit-content",
                            fontFamily:"Yekan, sans-serif"
                            }}
                            onClick={deleteHandler}
                            >
                            حذف
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant="contained" sx={{
                            backgroundColor: "#3ea2d9",
                            width:"fit-content",
                            fontFamily:"Yekan, sans-serif"
                            }}
                            onClick={edithandler}
                            >
                            ویرایش
                        </Button>
                    </div>
                }
            </CardContent>
        </Card>
    )
}

export default StudentCard