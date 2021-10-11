import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VillianService } from '../villian-service';
import { Villian } from '../villian';

@Component({
  selector: 'app-villian-edit',
  templateUrl: './villian-edit.component.html',
  styleUrls: ['./villian-edit.component.scss']
})
export class VillianEditComponent implements OnInit {

  public villianFg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private villianService: VillianService,
    private router: Router
  ) {

    this.villianFg = this.fb.group({
      name: [villianService.selectedVillian?.name, [Validators.required]],
      powers: [villianService.selectedVillian?.powers, [Validators.required]],
      imgUrl: [villianService.selectedVillian?.imgUrl, [Validators.required]],
      buttonText: [villianService.selectedVillian?.buttonText, [Validators.required]],
      saying: [villianService.selectedVillian?.saying, [Validators.required]],
    });

  }

  ngOnInit(): void {
  }

  public onSubmit({ value, valid }: { value: Villian, valid: boolean })
  {
    if(!valid) return;

    let onGetSuccess = (result: Villian) => {
      this.villianService.Select(result);
      this.router.navigate(['/']);
    };

    let onEditSuccess = () => {
      this.villianService.Get(this.villianService.selectedVillian!.id, onGetSuccess, onError);
    };

    let onError = () => { };

    this.villianService.Update(this.villianService.selectedVillian!.id, value, onEditSuccess, onError);
  }
}
