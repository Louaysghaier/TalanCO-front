import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
  export class FormService {
    
  
    constructor(private http: HttpClient,private authService: AuthService) {}
    submitWorkData(workData: any): Observable<any> {
      const url = 'http://localhost:8081/api/works/sum_carbo_works';
      const token = this.authService.getAuthToken();

      var headers =new HttpHeaders({
        Authorization: `access ${token}`
      })
      return this.http.post(url, workData,{headers});
    }
  
    submitAlimentationData(alimentationData: any): Observable<any> {
      const url = 'http://localhost:8081/api/food/sum_carbo_food';
      const token = this.authService.getAuthToken();

      var headers =new HttpHeaders({
        Authorization: `access ${token}`
      })
      return this.http.post(url, alimentationData,{headers});
    }
  
    submitTransportData(transportData: any, apiUrl: string): Observable<any> {
      const token = this.authService.getAuthToken();

      var headers =new HttpHeaders({
        Authorization: `access ${token}`
      })
      return this.http.post(apiUrl, transportData,{headers});
    }
    
    sumTotal() :Observable<any>{
      const url = 'http://localhost:8081/api/Bilan/Sum-Emp';
      const token = this.authService.getAuthToken();
  
      var headers =new HttpHeaders({
        Authorization: `access ${token}`
      })
      return this.http.get(url,{headers});
    } 
    
  }
  
