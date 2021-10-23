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

  public async GetAsync(id: string) {
    return this.dataService.GetAsync<Villian>(`api/Villian/${id}`);
  }

  public async GetAllAsync() {
    return this.dataService.GetAsync<Villian[]>('api/Villian');
  }

  public async AddAsync(villian: Villian) {
    return await this.dataService.PostAsync<Villian, Villian>('api/Villian', villian);
  }

  public async UpdateAsync(id: string, villian: Villian) {
    return await this.dataService.PutAsync<Villian>(`api/Villian/${id}`, villian);
  }

}
