// import { useEffect, useRef } from 'react';

// const MapComponent = ({ apiKey, zoom, center }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current) return;
  
//     const googleMapsScript = document.createElement('script');
//     googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAgBm5Qg3xsSoHMIH56hfNsyVvlBoCUh6U`;
//     googleMapsScript.async = true;
//     googleMapsScript.defer = true;
//     window.document.body.appendChild(googleMapsScript);
  
//     const handleScriptLoad = () => {
//       const map = new window.google.maps.Map(mapRef.current, {
//         zoom: zoom,
//         center: center,
//       });
  
//       // You can add additional map functionality here
  
//       // Example: Adding a marker
//       const marker = new window.google.maps.Marker({
//         position: center,
//         map: map,
//       });
//     };
  
//     googleMapsScript.addEventListener('load', handleScriptLoad);
  
//     return () => {
//       // Clean up the Google Maps script when the component is unmounted
//       googleMapsScript.removeEventListener('load', handleScriptLoad);
//       googleMapsScript.remove();
//     };
//   }, [apiKey, zoom, center]);

//   return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
// };

// export default MapComponent;
