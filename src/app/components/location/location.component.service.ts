import { Injectable } from '@angular/core';
import { LocationConnector } from 'src/app/data/location/location.connector';

@Injectable()
export class LocationComponentService {
  constructor(private connector: LocationConnector) {}

  public getModel() {
    return { data$: this.connector.getLocations(), title: 'Location Tree' };
  }
}
