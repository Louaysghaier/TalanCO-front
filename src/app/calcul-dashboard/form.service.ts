import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
  export class FormService {
    
  
    constructor(private http: HttpClient) {}
    submitWorkData(workData: any): Observable<any> {
      const url = 'http://localhost:8081/api/works/sum_carbo_works';
      return this.http.post(url, workData);
    }
  
    submitAlimentationData(alimentationData: any): Observable<any> {
      const url = 'http://localhost:8081/api/food/sum_carbo_food';
      return this.http.post(url, alimentationData);
    }
  
    submitTransportData(transportData: any, apiUrl: string): Observable<any> {
      return this.http.post(apiUrl, transportData);
    }
    sumTotal() :Observable<any>{
      const url = 'http://localhost:8081/api/Bilan/Sum-Emp';
      return this.http.get(url);
    } 

    
  }
  
