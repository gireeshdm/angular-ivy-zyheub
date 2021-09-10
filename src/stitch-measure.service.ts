import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Measure } from './measure';
@Injectable({
  providedIn: 'root'
})
export class StitchMeasureService {
  constructor(private http: HttpClient) {}
  public doRegistration(measure: Measure) {
    return this.http.post('http://localhost:8089/measurements/', measure, {
      responseType: 'text' as 'json'
    });
  }
}
