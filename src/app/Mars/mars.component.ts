import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
// API KEY - 4O7kxB74PxdUdOoK17f0pcqLZn4kJAmUDJrWYgbt

@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent {
  public currentIndex: number = 0;

  public urls!: string[];
  public day: number = 6;
  public container!: Container;
  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.urls = [];
  }

  ngOnInit() {
    this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-${this.day}-3&api_key=${this.sharedService.key}`)
      .subscribe(data => {

        let temp: string = JSON.stringify(data);
        this.container = JSON.parse(temp);
        console.log(this.container)
      });
  }

  public nextImage() {
    if (this.currentIndex < this.container.photos.length - 1) {
      this.currentIndex++;
    }
    else {
      this.currentIndex = 0;
    }
  }

  public lastImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
    else {
      this.currentIndex = this.container.photos.length - 1;
    }
  }
}

interface RoverData {
  camera: {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
  };
  earth_date: string;
  id: number;
  img_src: string;
  rover: {
    id: number;
    landing_date: string;
    launch_date: string;
    name: string;
    status: string;
  };
  sol: number;
}
export class Container {
  public photos: RoverData[];
  constructor(nas: RoverData[]) {
    this.photos = nas;
  }
}