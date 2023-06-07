import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
// API KEY - 4O7kxB74PxdUdOoK17f0pcqLZn4kJAmUDJrWYgbt

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
  inputValue: string = '';
  constructor(private sharedService: SharedService) { }

  saveInput() {
    console.log(this.inputValue);
    this.sharedService.key = this.inputValue;
    this.sharedService.acess = true;
  }
  openLink() {
    const url = 'https://api.nasa.gov';
    window.open(url, '_blank');
  }
}
