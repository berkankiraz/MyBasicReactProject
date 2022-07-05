
import React from "react";

function About() {
  return (
   
      <iframe
        id="iFrameExample"
        title="iFrame Example"
        src="https://www.ordulu.com/"
        style={{height: "100%"}}
      ></iframe>
    
  );
}

export default About;



// import React from 'react'
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// function Map() {
//   const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//       <Marker position={center} />
//     </GoogleMap>
//   );
// }

// function About() {

//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     //googleMapsApiKey: key,

//   });

//   if (!isLoaded)

//     return <div>Loading...</div>;

//   return <Map />;

// }

// export default About
