import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudGlkZXYiLCJhIjoiY2xxcWtxenZuMzNzNDJrcGhubjRucnN1MSJ9.pS23xsyiqC0Jni2lOxCx4w';

if ( !navigator.geolocation ) {
  alert('Navegador no soporta la Geolocation')
  throw new Error('Navegador no soporta la Geolocation')
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
