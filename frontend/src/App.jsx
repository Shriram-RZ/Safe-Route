import React, { useEffect } from 'react';
import { OlaMaps } from 'olamaps-web-sdk';

const App = () => {
  useEffect(()=>{
    const olaMaps = new OlaMaps({
    apiKey: [process.env.REACT_APP_OLA_API_KEY],
    
})
olaMaps.init({
  style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
  container: 'map',
  center: [77.61648476788898, 12.931423492103944],
  zoom: 15,
})

  })
  

  return (
    <div id='map' style={{width:'100vw',height:'100vh'}}>
      
    </div>
  )
}

export default App
