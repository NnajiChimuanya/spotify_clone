import "./footer.css"
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider, Box } from "@material-ui/core"
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { useDataLayerValue } from "../../Datalayer";
import React, { useState,useEffect } from "react"
import SpotifyWebApi from 'spotify-web-api-js';
import { fabClasses } from "@mui/material";
const spotify = new SpotifyWebApi()


const Footer = () => {
    const [{currently_playing}, dispatch] = useDataLayerValue()
    const [playing, setPlaying] = useState(false)
  
 

    useEffect(() => {
       let run = false
       
        spotify.getMyCurrentPlayingTrack().then((response) => {
            dispatch({
                type : "SET_CURRENTLY_PLAYING",
                currently_playing : response
            })
        })  
      
       
    }, [currently_playing])

    const handlePlay = () => {
        spotify.play().then(() => {
            console.log("Playing")
        })
        setPlaying(true)
    }

    const handlePause = () => {
        spotify.pause().then(() => {
            console.log("pause")
        })

        setPlaying(false)
    }

   const handleNext = () => {
       spotify.skipToNext().then(() => {
           console.log("Skipped to next")
       })
   }

   const handlePrevious= () => {
        spotify.skipToPrevious().then(() => {
            console.log("Skipped to Previous")
        })
    }


    return (
        <div className="footer">
            <div className="footer-left">

                
                < img src={currently_playing?.item?.album.images[0].url} alt="" />
               
               <div className="footer-left-songInfo">
                    <h4> { currently_playing?.item?.name} </h4>
                    <p>{ currently_playing?.item?.artists.map(artist => artist.name).join(",")} </p>
               </div>
            </div>

            <div className="footer-center">
                <ShuffleIcon className="footer-green"/>
                <SkipPreviousOutlinedIcon onClick={handlePrevious} className="footer-icon" />
                {
                    playing ? < PauseCircleFilledIcon onClick={handlePause} fontSize="large" className="footer-icon"/> 
                    : <PlayCircleOutlinedIcon onClick={handlePlay} fontSize="large" className="footer-icon" />
                }

                <SkipNextOutlinedIcon onClick={handleNext} className="footer-icon" />
                <RepeatIcon className="footer-green"/>
            </div>

            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        < PlaylistPlayIcon />
                    </Grid>

                    <Grid item>
                        < VolumeDownIcon />
                    </Grid>

                    <Grid item>
                        < Box width={100}>
                        < Slider   className="slider" size="small" defaultValue={70} aria-label="small" valueLabelDisplay="auto" />
                        </Box>
                    </Grid>
                   
                </Grid>
            </div>
        </div>
    )
  }
  
  export default Footer