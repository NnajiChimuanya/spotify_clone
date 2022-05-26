import "./footer.css"
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider, Box } from "@material-ui/core"
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                < img src="https://www.okayplayer.com/wp-content/uploads/2022/05/kendrick-lamar-mr-morale-and-the-big-steppers-album-cover.jpeg" alt="" />
               
               <div className="footer-left-songInfo">
                    <h4> Yeah !</h4>
                    <p> Drake</p>
               </div>
            </div>

            <div className="footer-center">
                <ShuffleIcon className="footer-green"/>
                <SkipPreviousOutlinedIcon className="footer-icon" />
                <PlayCircleOutlinedIcon fontSize="large" className="footer-icon" />
                <SkipNextOutlinedIcon className="footer-icon" />
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
                        < Slider size="small" defaultValue={70} aria-label="small" valueLabelDisplay="auto" />
                        </Box>
                    </Grid>
                   
                </Grid>
            </div>
        </div>
    )
  }
  
  export default Footer