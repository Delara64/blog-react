// import { useEffect, useRef } from 'react';

// const Map = ({ apiKey, zoom, center }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Check if the mapRef is not null
//     if (!mapRef.current) return;
  
//     // Create a script element for Google Maps API
//     const googleMapsScript = document.createElement('script');
//     googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
//     googleMapsScript.async = true;
//     googleMapsScript.defer = true;
//     window.document.body.appendChild(googleMapsScript);
  
//     // Function to handle the script load event
//     const handleScriptLoad = () => {
//       // Create a new map instance
//       const map = new window.google.maps.Map(mapRef.current, {
//         zoom: zoom,
//         center: center,
//       });
  
//       // Add a marker to the map
//       const marker = new window.google.maps.Marker({
//         position: center,
//         map: map,
//       });
//     };
  
//     // Add event listener for script load
//     googleMapsScript.addEventListener('load', handleScriptLoad);
  
//     // Clean up function to remove event listener and script element
//     return () => {
//       googleMapsScript.removeEventListener('load', handleScriptLoad);
//       googleMapsScript.remove();
//     };
//   }, [apiKey, zoom, center]);

//   // Render a div with the mapRef as a reference and set its style
//   return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
// };

// export default Map;
