import React from 'react'
import './Header.css'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';


const Header =() => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon frontSize="large" className="header_icon"></PersonIcon>
            </IconButton>
            <img className="header_logo" src="https://i.pinimg.com/474x/6b/36/09/6b3609a026ca703ed2b589626712efcd--funny-stuff-cat-stuff.jpg" alt="header"></img>
            <IconButton>
                <ForumIcon frontSize="large" className="header_icon"></ForumIcon>
            </IconButton>

        </div>
    )
}

export default Header