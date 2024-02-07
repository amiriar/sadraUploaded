import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    ThemeProvider,
    createTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

const theme = createTheme({
    direction: 'rtl',
});

const DashboardCard = ({ icon, title, link }) => {
    return (
        <ThemeProvider theme={theme}>
                <Card className="card">
                    <CardContent>
                        <IconButton color="primary" size="large">
                            {icon}
                        </IconButton>
                        <Typography fontFamily={'Yekan, sans-serif'} variant="h5" component="div">
                            {title}
                        </Typography>
                        <Link to={link}>
                            <Typography fontFamily={'Yekan, sans-serif'} variant="body2" color="textSecondary" sx={{padding:"5px"}}>
                                برای مشاهده {title} کلیک کنید.
                            </Typography>
                        </Link>
                    </CardContent>
                </Card>
        </ThemeProvider>
    );
};

export default DashboardCard;
