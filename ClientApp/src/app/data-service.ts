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

  public post = <TIn, TOut>(subUrl: string, body: TIn, onSuccess: Function, onError: Function) => {
    return this.http.post<TOut>(`${this.baseUrl}${subUrl}`, body)
      .subscribe(
        (result: TOut) => onSuccess(result),
        (error) => onError(error)
      );
  }

}

