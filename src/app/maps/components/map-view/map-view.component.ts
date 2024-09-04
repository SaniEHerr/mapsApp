import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import mapboxgl, { Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.css'
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  constructor(
    private placesServices: PlacesService,
    private mapService: MapService
  ) { }

  ngAfterViewInit(): void {
    if ( !this.placesServices.userLocation ) throw Error('No hay placesService.userLocation')

    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>Te encontre!</h6>
        <span>Estas en mi Kokoro!!!</span>
      `)

    new Marker( { color: 'red' } )
      .setLngLat( this.placesServices.userLocation )
      .setPopup( popup )
      .addTo( map )

    this.mapService.setMap( map );
  }

}
