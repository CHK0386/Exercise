import React from 'react'
import {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
const VideoSidebar = ({likes, shares, messages}) => {
    const [liked, setLiked] = useState(false)
    
    return (
    <div className="videoSidebar">
        <div className="videoSidebar_button">
            {liked ? <FavoriteIcon fontSize="large" onClick={e => setLiked(false)}/> : <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)}/>}
            <p>{liked ? +likes + 1 : likes}</p>
        </div>
        <div className="VideoSidebar_button">
            <MessageIcon fontSize="large"/>
        </div>
        <div className="videoSidebar_button">
            <ShareIcon fontSize="large"/>
            <p>{shares}</p>
        </div>
      
    </div>
  )
}

export default VideoSidebar