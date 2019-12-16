import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { City } from './models/city';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'it255-weather';

  public cities: City[] = [];
  
  constructor(private _weatherService: WeatherService) {

  }

  ngOnInit() {
    this._weatherService.fetchCities().subscribe((res: any) => {
      this.cities = res;
    })
  }
}
