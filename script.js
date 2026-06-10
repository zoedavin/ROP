mapboxgl.accessToken = 'pk.eyJ1IjoiemRhdmluIiwiYSI6ImNtcThnZWZ5bzBhaGcydW9lemdybmgzYjAifQ.jdVjKPuAHW7s5kGAbzCRXQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/zdavin/cmq8gibn100a001rf6oaterk1', // your Style URL goes here
  center: [-116.058, 33.088], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });
