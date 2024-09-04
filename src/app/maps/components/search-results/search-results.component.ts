import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Feature } from '../../interfaces/places';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  public selectedId: string = '';

  constructor(
    private placesServices: PlacesService,
    private napServices: MapService,
  ) {}

  get isLoadingPlaces(): boolean {
    return this.placesServices.isLoadingPlaces;
  }

  get places() {
    return this.placesServices.places;
  }

  flyTo( place: Feature) {
    this.selectedId = place.id;

    const [ lng, lat ] = place.center;
    this.napServices.flyTo([ lng, lat ]);
  }

  getDirections( place: Feature ) {
    if ( !this.placesServices.userLocation ) throw Error('No hau userLocation');

    this.placesServices.deletePlaces();

    const start = this.placesServices.userLocation;
    const end = place.center as [number, number];

    this.napServices.getRouteBetweenTwoPoints( start, end )
  }

}
