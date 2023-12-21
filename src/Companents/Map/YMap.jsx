import React from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 40.790361,
      lng: 72.348684
    },
    zoom: 17
  };

  return (
    <div style={{ height: '400px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB8NHCF-5fMix0w2363RhC3V4vcyw8SHSM" , libraries:['places', 'geometry', 'drawing', 'visualization']}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        layerTypes={['TrafficLayer', 'TransitLayer']}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}
