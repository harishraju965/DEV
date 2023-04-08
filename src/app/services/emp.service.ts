import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http: HttpClient) { }

  saveemp(data: any) {

    return this.http.post<any>("http://localhost:3000/empdata", data);

  }
  getemp() {
    return this.http.get<any>("http://localhost:3000/empdata");
  }

  del(id: any) {
    return this.http.delete<any>("http://localhost:3000/empdata/" + id)
  }
  getSingleEmpData(id: any) {
    return this.http.get<any>("http://localhost:3000/empdata/" + id);
  }

  updateemp(data: any, id: any) {

    return this.http.put<any>("http://localhost:3000/empdata/" + id, data);


  }
}
