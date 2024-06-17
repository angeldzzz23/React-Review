import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css'; 

function Map() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");


    return (
        <div className={styles.mapContainer} onClick={()=>{navigate("form")}}>
            <h1>
                position: {lat}, {lng}
            </h1>
            <button onClick={() => {
               setSearchParams({lat:23, lng:50});
            }}>
                change positions
            </button>
           
        </div>
    );
}

export default Map;


