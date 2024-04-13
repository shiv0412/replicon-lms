import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
declare var require: any;

@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(private http: HttpClient) {}

  getUserDetails() {
    // this.http.get(url).subscribe((data: any) => console.log(data.json()));

    // For testing
    return new Promise<any>((resolve, reject) => {
      const data = require('../_test-data/getUserDetails.json');
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }

  getCurrentTimesheetDetails(userID: number) {
    // this.http.get(url).subscribe((data: any) => console.log(data.json()));

    // For testing
    return new Promise<any>((resolve, reject) => {
      const data = require('../_test-data/getUserCurrentTimesheet.json');
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
}
