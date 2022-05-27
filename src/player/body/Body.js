import "./body.css"
import Header from "./header/Header"


const Body = ({spotify}) => {
    return (
    <div className="body">
        < Header spotify={spotify} />

        <div className="body-info">
            <img src="" alt="" />

            <div className="body-info-text">
                <strong>PLAYLIST</strong>
                <h2> Disscover weekly</h2>
                <p> Tesjliholid ......</p>
            </div>
        </div>
    </div>
    )
  }
  
  export default Body