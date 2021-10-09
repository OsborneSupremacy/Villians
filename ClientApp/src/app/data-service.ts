import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(
    private http: HttpClient) {
  }

  public apiRequest = <T>(url: string, validConsumer: Function, errorConsumer: Function) => {

    return this.http.get<T>(url)
      .subscribe(
        (result: T) => validConsumer(result),
        (error) => errorConsumer(error)
      );
  }

}

