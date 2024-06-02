import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public weathers: any = {}; // Initialize with an empty object
  public temp = 0;
  public city = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getDataNow().subscribe((result) => {
      // tambahkan pada code di bawah

      var weatherResult: any = result;

      // tambahkan pada code di bawah

      this.weathers = weatherResult;
      this.temp = weatherResult.main.temp;
      this.city = weatherResult.name;

      // console.log(weatherResult);
    });
  }
}
