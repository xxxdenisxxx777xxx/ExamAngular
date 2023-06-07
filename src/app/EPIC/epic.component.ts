import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../shared.service';
// API KEY - dqkcRdxWDtowGDln9oe8pmtkouFh7kBdL5uUP1sh

@Component({
  selector: 'app-epic',
  templateUrl: './epic.component.html',
  styleUrls: ['./epic.component.css']
})
export class EpicComponent {
  public nasa!: MyObject[];
  public currentIndex: number = 0;
  public urls!: string[];
  public day: number = 5;
  public photos: string[] = [];

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.urls = [];
  }
  ngOnInit() {
    this.http.get(`https://api.nasa.gov/EPIC/api/natural/date/2019-05-30?api_key=${this.sharedService.key}`)
      .subscribe(data => {
        console.log(data)
        let temp: string = JSON.stringify(data);
        this.nasa = JSON.parse(temp);
        this.loadPhotos();
      });
  }
  loadPhotos() {
    this.nasa.forEach((item) => {
      let year: number = parseInt(item.date.split('-')[0]);
      let month: number = parseInt(item.date.split('-')[1]);
      let day: number = parseInt(item.date.split('-')[2]);
      const apiUrl = 'https://epic.gsfc.nasa.gov/archive/natural/' + year + '/0' + month + '/' + day + '/png/' + item.image + ".png";

      this.photos.push(apiUrl);

    });
  }

  public nextImage() {
    this.currentIndex++;
  }
  public lastImage() {
    this.currentIndex--;
  }
}

interface MyObject {
  attitude_quaternions: {
    q0: number;
    q1: number;
    q2: number;
    q3: number;
  };
  caption: string;
  centroid_coordinates: {
    lat: number;
    lon: number;
  };
  coords: {
    attitude_quaternions: {
      q0: number;
      q1: number;
      q2: number;
      q3: number;
    };
    centroid_coordinates: {
      lat: number;
      lon: number;
    };
    dscovr_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    lunar_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    sun_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
  };
  date: string;
  dscovr_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  identifier: string;
  image: string;
  lunar_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  sun_j2000_position: {
    x: number;
    y: number;
    z: number;
  };
  version: string;
}

interface Photo {
  url: string;
}