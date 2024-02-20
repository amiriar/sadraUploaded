import React from 'react'

import { Link } from 'react-router-dom';
import { IoPerson } from "react-icons/io5";
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import { adminCategories } from '../Categories';

function NewUser() {

    const [setting , setSetting] = useState(false)
    const mobileSetting = ()=>{
        setSetting(e => !e);
        console.log(setting)
      }

    return (
        <>
        <div>NewUser</div>
            {/* Responsive */}
                
            <div className='MobileDrawerDash'>
                <button onClick={mobileSetting} className='drawerButton'> <IoPerson style={{width : 20 , height : 20}} /></button>
            </div>

            <Drawer anchor='left' open={setting} onClose={()=> setSetting(false)}>
                <Box>
                    <ul className='dashboardList'>
                    {
                        adminCategories.map((item) => (
                            <li><Link key={item.title} to={item.link}>{item.title}</Link></li>
                        ))
                    }
                    </ul>
                </Box>
            </Drawer>

        {/* Responsive */}
        </>

    )
}

export default NewUser