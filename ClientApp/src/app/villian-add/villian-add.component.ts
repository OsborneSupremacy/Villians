import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VillianService } from '../villian-service';
import { Villian } from '../villian';

@Component({
  selector: 'app-villian-add',
  templateUrl: './villian-add.component.html',
  styleUrls: ['./villian-add.component.scss']
})
export class VillianAddComponent implements OnInit {

  public villianFg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private villianService: VillianService,
    private router: Router
  ) {

    let villian = new Villian();
    villian.name = '',
    villian.powers = '';
    villian.imgUrl = '';
    villian.buttonText = '';
    villian.saying = '';

    this.villianFg = this.fb.group({
      name: [villian.name, [Validators.required]],
      powers: [villian.powers, [Validators.required]],
      imgUrl: [villian.imgUrl, [Validators.required]],
      buttonText: [villian.buttonText, [Validators.required]],
      saying: [villian.saying, [Validators.required]],
    });

  }

  ngOnInit(): void {
  }

  public onSubmit({ value, valid }: { value: Villian, valid: boolean })
  {
    if(!valid) return;

    let onSuccess = (result: Villian) => {
      this.villianService.Select(result);
      this.router.navigate(['/']);
    };

    let onError = () => { };

    this.villianService.Add(value, onSuccess, onError);
  }

}
