import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string)
  {

  }

  public GetAsync = async <T>(subUrl: string) => {
    return this.http.get<T>(`${this.baseUrl}${subUrl}`).toPromise();
  }

  public PostAsync = async <TIn, TOut>(subUrl: string, body: TIn) => {
    return await this.http.post<TOut>(`${this.baseUrl}${subUrl}`, body).toPromise();
  }

  public PutAsync = async <T>(subUrl: string, body: T) => {
    return await this.http.put(`${this.baseUrl}${subUrl}`, body).toPromise();
  }
}

