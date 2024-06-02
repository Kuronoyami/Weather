import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  [x: string]: any;
  url = 'https://api.openweathermap.org/data/2.5/';
  key = 'b863baf8a0d1ff2a963c43db6f7de3e4';
  city = 'Sleman';

  constructor(private http: HttpClient) {}

  getDataNow() {
    return this.http.get(
      `${this.url}weather?q=${this.city}&appid=${this.key}&units=metric`
    );
  }
  getDataForecast() {
    return this.http.get(
      `${this.url}forecast?q=${this.city}&appid=${this.key}&units=metric`
    );
  }

  
}
