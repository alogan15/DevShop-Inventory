import { Home, Groups, Inventory, BedroomParent, AttachMoney, ViewWeek } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@mui/material";
import {useLocation, useNavigate} from 'react-router-dom';
import React from "react";
//import { ClassNames } from "@emotion/react";
  
// const useStyles = makeStyles({
//     active: {
//         background: '#f4f4f4'
//     }
// })
const menuItems = [
    {
        text: 'Homepage',
        icon: <Home />,
        path: '/'
    },
    {
        text: 'Inventory',
        icon: <Inventory />,
        path: '/Create'
    },
    {
        text: 'Need A Room',
        icon: <BedroomParent />,
        path: '/rooms'
    },
    {
        text: 'Send A Donation',
        icon: <AttachMoney />,
        path: '/donations'
    },
    {
        text: 'Become A Volunteer',
        icon: <Groups />,
        path: '/volunteers'
    },
    {
        text: 'Donate Clothing',
        icon: <ViewWeek />,
        path: '/clothing'
    }
]
   

const Sidebar = ({mode,setMode}) => {
    // const classes = useStyles()
    const history = useNavigate()
    const location = useLocation()
    
    return (
      
            <List>
                {menuItems.map(item => (
                    // <div className={location.pathname === item.path && classes.active}>
                    <ListItem
                        button
                        key={item.text}
                        onClick={() => history.push(item.path)}
                        
                    >
                    <ListItemIcon>
                            {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItem>
                    // </div>
                ))}
            </List>
    );
  };
  
  export default Sidebar;