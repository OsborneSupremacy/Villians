import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VillianService } from '../villian-service';
import { Villian } from '../villian'

@Component({
  selector: 'app-villian-selector',
  templateUrl: './villian-selector.component.html',
  styleUrls: ['./villian-selector.component.scss']
})
export class VillianSelectorComponent implements OnInit {

  public villians: Villian[];

  public selectedVillian(): Villian | undefined {
    return this.villianService.selectedVillian;
  }

  public select(villian: Villian) {
    this.villianService.selectedVillian = villian;
  }

  public edit(villian: Villian) {
    this.villianService.selectedVillian = villian;
    this.router.navigate(['/', 'Edit']);
  }

  public flip(villian: Villian) {
    villian.flipped = !villian.flipped;
  }

  public getImageUrl(villian: Villian) {
    return `/api/image/get/${villian.imageName}`;
  }

  constructor(
    protected villianService: VillianService,
    private router: Router
    ) {

    this.villians = [];

    let onSuccess = (result: Villian[]) => {
      this.villians = result;
    };

    let onError = () => { };

    villianService.GetAll(onSuccess, onError);

  }

  ngOnInit(): void {
  }
}
