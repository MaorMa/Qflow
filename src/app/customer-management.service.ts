import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerManagementService {

  constructor(private http: HttpClient) { }

  public insertToQueue(customerName: string): Observable<any> {
    return this.http.post<any>('http://localhost:49241/api/Queue/InsertToQueue/' + customerName, '' , { withCredentials: true });
  }

  public getNext(): Observable<any> {
    return this.http.get<any>('http://localhost:49241/api/Queue/getNext', { withCredentials: true });
  }

  public getWaitingUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:49241/api/Queue/getWaitingUsers', { withCredentials: true });
  }
}
