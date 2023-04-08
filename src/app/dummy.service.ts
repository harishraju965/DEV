import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private http: HttpClient) { }
  saveemp(data: any) {

    return this.http.post<any>("https://jsonplaceholder.typicode.com/todos", data);

  }
  getemp() {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/todos");
  }
}
