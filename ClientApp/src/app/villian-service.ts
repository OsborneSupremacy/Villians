import { Injectable, Inject } from '@angular/core';
import { DataService } from './data-service';
import { Villian } from './villian';

@Injectable({
  providedIn: 'root'
})
export class VillianService {

  public selectedVillian: Villian | undefined;

  constructor(
    private dataService: DataService
  ) {

  }

  public Select(villian: Villian) {
    this.selectedVillian = villian;
  }

  public GetAll(onSuccess: Function, onError: Function) {
    return this.dataService.get<Villian[]>('api/Villian', onSuccess, onError);
  }

  public Add(villian: Villian, onSuccess: Function, onError: Function) {
    return this.dataService.post<Villian, Villian>('api/Villian', villian, onSuccess, onError);
  }

}
