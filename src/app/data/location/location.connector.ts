import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Node } from 'src/@core/model';

@Injectable({
  providedIn: 'root',
})
export class LocationConnector {
  constructor(private http: HttpClient) {}

  public getLocations(): Observable<Node> {
    return this.http.get<Node>('assets/mock-data/location.json');
  }

  public updateLocation() {}
}
