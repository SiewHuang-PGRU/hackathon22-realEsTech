import { Injectable } from '@angular/core';
import { DataPoint } from '../model/datapoint';
import { DATAPOINTS } from '../model/mock-datapoint';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatapointService {

  constructor() { } 

  getDataPoints(location: any): Observable<DataPoint[]>{
    var datapoints = DATAPOINTS.filter(a => a.location === location)!;
    if(datapoints.length ==0){
      datapoints = DATAPOINTS.filter(a => a.id%2 ==- 0)!;
    }
    return of(datapoints);
  }

  getDataPointsByIds(arr: Number[]): Observable<DataPoint[]>{
    //const datapoint = DATAPOINTS.find(a => a.id ===id);
   
    const datapoints = DATAPOINTS.filter(a => arr.includes(a.id));
    return of(datapoints);
  }
}
