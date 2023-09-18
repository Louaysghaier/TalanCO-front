import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../login/auth.service';
@Injectable({
  providedIn: 'root'
})
export class FormentrpService {

  constructor(private http: HttpClient,private authService: AuthService) {}

  submitresourcesData(ResourceData: any): Observable<any> { 
    const url = 'http://localhost:8081/api/ListResources/sum_carbo_resource';
    const token = this.authService.getAuthToken();

    var headers =new HttpHeaders({
      Authorization: `access ${token}`
    })
    return this.http.post(url, ResourceData,{headers});

  }
  submitTransportData(transportData: any, apiUrl: string): Observable<any> {

    const token = this.authService.getAuthToken();

    var headers =new HttpHeaders({
      Authorization: `access ${token}`
    })
    return this.http.post(apiUrl, transportData,{headers});


  }


  sumTotal() :Observable<any>{
    const url = 'http://localhost:8081/api/Bilan/Sum-Entp';
    const token = this.authService.getAuthToken();

    var headers =new HttpHeaders({
      Authorization: `access ${token}`
    })
    return this.http.get(url,{headers});
  } 
}
