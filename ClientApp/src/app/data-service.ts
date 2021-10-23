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

  public get = <T>(subUrl: string, onSuccess: Function, onError: Function) => {
    return this.http.get<T>(`${this.baseUrl}${subUrl}`)
      .subscribe(
        (result: T) => onSuccess(result),
        (error) => onError(error)
      );
  }

  public GetAsync = async <T>(subUrl: string) => {
     return this.http.get<T>(`${this.baseUrl}${subUrl}`).toPromise();
  }

  public post = <TIn, TOut>(subUrl: string, body: TIn, onSuccess: Function, onError: Function) => {
    return this.http.post<TOut>(`${this.baseUrl}${subUrl}`, body)
      .subscribe(
        (result: TOut) => onSuccess(result),
        (error) => onError(error)
      );
  }

  public put = <T>(subUrl: string, body: T, onSuccess: Function, onError: Function) => {
    return this.http.put(`${this.baseUrl}${subUrl}`, body)
      .subscribe(
        (result) => onSuccess(result),
        (error) => onError(error)
      );
  }

  public PutAsync = async <T>(subUrl: string, body: T) => {
    return await this.http.put(`${this.baseUrl}${subUrl}`, body).toPromise();
  }
}

