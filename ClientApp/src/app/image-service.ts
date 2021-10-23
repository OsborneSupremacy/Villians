import { Injectable, Inject, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {

  }

  public async AddAsync(image: File) {

    const formData = new FormData();
    formData.append('image', image);

    var result = await this.http.post<ImageUploadResult>(`${this.baseUrl}api/image/upload`, formData)
      .toPromise();

    return result;
  }

  public Add(image: File, onSuccess: Function, onError: Function) {

    const formData = new FormData();
    formData.append('image', image);

    return this.http.post<ImageUploadResult>(`${this.baseUrl}api/image/upload`, formData)
      .subscribe(
        (result: ImageUploadResult) => onSuccess(result),
        (error) => onError(error)
      );
  }
}

export class ImageUploadResult
{
  public success!: boolean;

  public message!: string;

  public newFileName!: string;
}
