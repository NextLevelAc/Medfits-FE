import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  private apiUrl = 'http://localhost:5000/users';
  private getApiUrl = 'http://localhost:5000/users';
  private deletePostByIdUrl = 'http://localhost:5000/users'

  constructor(private http: HttpClient) { }

  // This method will return an observable that makes a POST request with User data
  postUser(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);  // Make POST request and return Observable
  }

  getAllPosts(): Observable<any> {
    return this.http.get<any>(this.getApiUrl)
  }

  deletePostById(postId: string): Observable<any> {
    return this.http.delete<void>(`${this.deletePostByIdUrl}/${postId}`)
  }

}
