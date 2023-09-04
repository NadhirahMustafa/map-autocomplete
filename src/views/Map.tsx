import React from "react";
import { connect } from "react-redux";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { RootState } from "../reducers/rootReducer";
import { SetCoordinateInterface } from "../interface/interface";
import { AUTH } from "../constants/apiKey.constant";
import "../styles/Styles.scss";

const Map: React.FC<SetCoordinateInterface> = ({ lat, lng }) => {
  const { isLoaded } = useJsApiLoader({
    id: AUTH.SCRIPT,
    googleMapsApiKey: AUTH.API_KEY,
  });

  const [, setMap] = React.useState(null);

  const center = {
    lat: lat === 0 ? 3.1319 : lat,
    lng: lng === 0 ? 101.6841 : lng,
  };

  const onLoad = React.useCallback(function callback(map: any) {
    new window.google.maps.LatLngBounds(center);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  const containerStyle = {
    width: "100%",
    height: "750px",
  };

  return isLoaded ? (
    <div className="map--padding">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      />
    </div>
  ) : (
    <></>
  );
};

const mapStateToProps = (state: RootState) => ({
  lat: state.locationData.lat,
  lng: state.locationData.lng,
});

export default connect(mapStateToProps)(React.memo(Map));
