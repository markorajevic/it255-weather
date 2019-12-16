import {map} from 'rxjs/internal/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private baseUrl: string = 'http://localhost:9080/index.php';

  constructor(private _httpClient: HttpClient) { }

  public fetchCities() {
    return this._httpClient.get(this.baseUrl).pipe(
      map((data: any[]) => data.map((item: any) =>
      this._createCityFromObject(item))),
      );
  }


  private _createCityFromObject(item:any) {
    console.log('item', item.woeid);
    return new City(item.distance, item.title, item.woeid);
  }
}
