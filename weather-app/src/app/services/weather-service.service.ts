import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from '../Models/weatherData';

const BASE_URL = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather';
const HEADER_1 = 'X-RapidAPI-Key';
const HEADER_1_VALUE = 'ecb5080d15msh4142fe016f952e7p11c9edjsn87d8875478b6';
const HEADER_2 = 'X-RapidAPI-Host';
const HEADER_2_VALUE = 'weather-by-api-ninjas.p.rapidapi.com';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService {
  constructor(private http: HttpClient) {}

  // getting weather data : consuming an api with headers :

  getWeather(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${BASE_URL}`, {
      headers: new HttpHeaders()
        .set(HEADER_1, HEADER_1_VALUE)
        .set(HEADER_2, HEADER_2_VALUE),
      params: new HttpParams().set('city', cityName),
    });
  }
}
