import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const theme = createTheme({
    direction: 'rtl',
});

const DashboardCard = ({ icon, title, link }) => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(link)
    }
    return (
        <ThemeProvider theme={theme}>
            {/* <div onClick={clickHandler}> */}
                <Card className="card" onClick={clickHandler} sx={{cursor:"pointer"}}>
                    <CardContent>
                        <IconButton color="primary" size="large">
                            {icon}
                        </IconButton>
                        <Typography fontFamily={'Yekan, sans-serif'} variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography fontFamily={'Yekan, sans-serif'} variant="body2" color="textSecondary" sx={{padding:"5px"}}>
                            برای مشاهده {title} کلیک کنید.
                        </Typography>
                    </CardContent>
                </Card>
            {/* </div> */}
        </ThemeProvider>
    );
};

export default DashboardCard;
