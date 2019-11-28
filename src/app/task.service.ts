import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class TaskService {


  private baseUrl1 = 'https://gknkkm84ue.execute-api.us-east-1.amazonaws.com/Test/tasks';
  private baseUrl2 = 'https://gknkkm84ue.execute-api.us-east-1.amazonaws.com/Test/tasks/pending';
  private baseUrl3 = 'https://gknkkm84ue.execute-api.us-east-1.amazonaws.com/Test/tasks/done';
  private baseUrl4 = 'https://gknkkm84ue.execute-api.us-east-1.amazonaws.com/Test/tasks/progress';

  




  constructor(private http: HttpClient,private router: Router) { }

  getTask(idTask: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${idTask}`);
  }
  createTask(task: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl1}`, task);
  }
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl1}/${id}`, { responseType: 'text' });
  }

  getTasksList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }
 
  Pending(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl2}/${id}`, { responseType: 'text' });
    
  }
  InProgress(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl4}/${id}`, { responseType: 'text' });
    
  }
  Done(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl3}/${id}`, { responseType: 'text' });
    
  }
}
