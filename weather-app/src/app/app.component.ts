import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from './services/weather-service.service';
import { WeatherData } from './Models/weatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  weatherData?: WeatherData;
  dataRetrived: boolean = true;
  cityName: string = 'cairo';
  name: string = this.cityName;

  constructor(private service: WeatherServiceService) {}

  ngOnInit(): void {
    this.getData(this.cityName);
    this.name = this.cityName;
    this.cityName = '';
  }

  //onsubmiting function
  onSubmit() {
    this.getData(this.cityName);
    this.name = this.cityName;
    this.cityName = '';
  }

  // function to get weather data :
  getData(city: string) {
    this.service.getWeather(city).subscribe((data) => {
      this.weatherData = data;
    });
  }
}
