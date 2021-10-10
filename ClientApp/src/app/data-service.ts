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

  public get = <T>(subUrl: string, validConsumer: Function, errorConsumer: Function) => {
    return this.http.get<T>(`${this.baseUrl}${subUrl}`)
      .subscribe(
        (result: T) => validConsumer(result),
        (error) => errorConsumer(error)
      );
  }

  public post = <TIn, TOut>(subUrl: string, body: TIn, validConsumer: Function, errorConsumer: Function) => {
    return this.http.post<TOut>(`${this.baseUrl}${subUrl}`, body)
      .subscribe(
        (result: TOut) => validConsumer(result),
        (error) => errorConsumer(error)
      );
  }

}

