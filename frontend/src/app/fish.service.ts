import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Fish } from './fish';


@Injectable({
  providedIn: 'root'
})
export class FishService {
  private baseUrl: string = 'http://localhost:8080/fish'; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  getFishies(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getFish(id: number): Observable<any>{
    const url = this.baseUrl + '/' + id
    return this.http.get(url);
  }

  updateFish(fish: Fish): Observable<any>{
    const url = this.baseUrl
    console.log(fish)
    return this.http.post(url, fish);
  }

  deleteFish(id:number): Observable<any>{
    const url = this.baseUrl + '/' + id
    return this.http.delete(url);
  }
}
