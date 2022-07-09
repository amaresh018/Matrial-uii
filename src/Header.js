import React from 'react'
import { Divider, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme)=>({
    title:{
        flexGrow:1,
    },
    fill:{
        fontSize:20,
        textTransform:"uppercase",
        justifyContent:"center",
        fontFamily:"montserrat"
    }
}));
const Header = () => {
    const classes=useStyles()
    return (
        <div>
            <Toolbar>
           
                <IconButton color='inherit'>
                    <MenuIcon />
                </IconButton>
              
                <Typography variant="h6" className={classes.title}>Blogging WebSide</Typography>
                <IconButton  color='inherit'>
                   <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton  color='inherit'>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>
            <Divider />
            <Toolbar className={classes.fill}>express your emotions through words</Toolbar>
        </div>
    )
}

export default Header
