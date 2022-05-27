import "./body.css"
import Header from "./header/Header"
import { useDataLayerValue } from "../../Datalayer"


const Body = ({spotify}) => {
    const [{discover_weekly}, dispatch] = useDataLayerValue()

    return (
    <div className="body">
        < Header spotify={spotify} />

        <div className="body-info">
            <img src={discover_weekly?.images[0].url} alt="" />

            <div className="body-info-text">
                <strong>PLAYLIST</strong>
                <h2> Discover weekly</h2>
                <p> {discover_weekly?.description}</p>
            </div>
        </div>
    </div>
    )
  }
  
  export default Body