import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';


const SwipeButtons =() => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat" >
                <ReplayIcon frontSize="large"> </ReplayIcon>
            </IconButton>
            <IconButton className="swipeButtons_left" >
                <CloseIcon frontSize="large"> </CloseIcon>
            </IconButton>
            <IconButton className="swipeButtons_start" >
                <StarsIcon frontSize="large"> </StarsIcon>
            </IconButton>
            <IconButton className="swipeButtons_right" >
                <FavoriteIcon frontSize="large"> </FavoriteIcon>
            </IconButton>
            <IconButton className="swipeButtons_lightning" >
                <FlashOnIcon frontSize="large"> </FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons