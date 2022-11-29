import React, {useRef, useState} from 'react'
import './Video.css'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
const Video=({url, channel, description, likes, shares, messages, song})=>{
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null)
    const handleVideoPress = () =>{
        if(playing)
        videoRef.current.play()
        setPlaying(true)
    }
 
 
return (
    <div className="video">
        <video
        src = {url}
        className="video__player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
        >
        </video>
        <VideoFooter channel={channel} description={description} song={song} />
        <VideoSidebar likes={likes} share={shares} messages={messages} />
    </div>
)
}
 
export default Video