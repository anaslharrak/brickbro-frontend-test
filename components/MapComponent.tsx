import { API_KEY } from "@/app/constants"
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

interface MapComponentProps {
    position: {
        lat: number,
        lng: number
    }
}

export default function MapComponent({position}: MapComponentProps) {
    return (
        <APIProvider apiKey={API_KEY}>
            <Map
            style={{width: '40vw', height: '60vh'}}
            defaultCenter={{lat: position.lat, lng: position.lng}}
            defaultZoom={18}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
            >
                <Marker position={{ lat: position.lat, lng: position.lng }} />
            </Map>
        </APIProvider>
        
    )
}