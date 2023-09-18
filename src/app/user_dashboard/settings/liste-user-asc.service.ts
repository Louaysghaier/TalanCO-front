import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from 'src/app/admin/table-list/user';

@Injectable({
  providedIn: 'root'
})
export class ListeUserAscService {

  private baseURL  ="http://localhost:8081/api/user/list-Userco2/ASC";

  constructor(private httpClient: HttpClient) { }

  getListUserAsc(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseURL);
  }
}
