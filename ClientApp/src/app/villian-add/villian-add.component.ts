import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService, ImageUploadResult } from '../image-service';
import { VillianService } from '../villian-service';
import { Villian } from '../villian';

@Component({
  selector: 'app-villian-add',
  templateUrl: '../villian-edit/villian-edit.component.html',
  styleUrls: ['../villian-edit/villian-edit.component.scss']
})
export class VillianAddComponent implements OnInit {

  public villianFg: FormGroup;

  private image: File | undefined;

  constructor(
    private fb: FormBuilder,
    private villianService: VillianService,
    private imageService: ImageService,
    private router: Router
  ) {

    let villian = new Villian();
    villian.name = '',
    villian.powers = '';
    villian.imageName = '';
    villian.buttonText = '';
    villian.saying = '';

    this.villianFg = this.fb.group({
      name: [villian.name, [Validators.required]],
      powers: [villian.powers, [Validators.required]],
      buttonText: [villian.buttonText, [Validators.required]],
      saying: [villian.saying, [Validators.required]],
    });

  }

  ngOnInit(): void {
  }

  public async onSubmit({ value, valid }: { value: Villian, valid: boolean })
  {
    if(!valid) return;

    if(this.image != null)
    {
      let imageUploadResult = await this.imageService.AddAsync(this.image);
      value.imageName = imageUploadResult.newFileName;
    }

    let villianOut = await this.villianService.AddAsync(value);
    this.villianService.Select(villianOut);
    this.router.navigate(['/']);

  }

  public fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0)
      this.image = fileList[0];
  }

}
