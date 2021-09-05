import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { Inicio } from './inicio';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private baseUrl = 'http://localhost:8082/api/v1/rooms';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createRoom(room: Object): Observable<Object> {
    var a = this.http.post(`${this.baseUrl}`, room);
    this.getRoomsList();
    return a;
  }

  updateRoom(id: number, value: any): Observable<Object> {
    
    var a = this.http.put(`${this.baseUrl}/${id}`, value);
    this.getRoomsList();
    return a;
        
  }

  deleteRoom(id: number): Observable<any> {
    var a = this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    this.getRoomsList();
    return a;
    
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getInicio(): Observable<Inicio>{
    return this.getInicio();
  }
}
