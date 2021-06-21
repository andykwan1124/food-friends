import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} ></GoogleMap>
  ) : <></>
}

export default Map;
