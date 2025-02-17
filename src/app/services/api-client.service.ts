import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootModel } from '../models/root.model';

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(private http: HttpClient) {}

  getjson(): Observable<RootModel> {
    let url: string = 'https://localhost:7126/api/States';
    return this.http.get<RootModel>(url);
  }
}
