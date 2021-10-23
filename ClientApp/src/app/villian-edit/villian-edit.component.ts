import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService, ImageUploadResult } from '../image-service';
import { VillianService } from '../villian-service';
import { Villian } from '../villian';

@Component({
  selector: 'app-villian-edit',
  templateUrl: './villian-edit.component.html',
  styleUrls: ['./villian-edit.component.scss']
})
export class VillianEditComponent implements OnInit {

  public villianFg: FormGroup;

  private image: File | undefined;

  constructor(
    private fb: FormBuilder,
    private villianService: VillianService,
    private imageService: ImageService,
    private router: Router
  ) {

    this.villianFg = this.fb.group({
      name: [villianService.selectedVillian?.name, [Validators.required]],
      powers: [villianService.selectedVillian?.powers, [Validators.required]],
      buttonText: [villianService.selectedVillian?.buttonText, [Validators.required]],
      saying: [villianService.selectedVillian?.saying, [Validators.required]],
    });

  }

  ngOnInit(): void {
  }

  public async onSubmit({ value, valid }: { value: Villian, valid: boolean }) {
    if (!valid) return;

    if (this.image != null) {
      let imageUploadResult = await this.imageService.AddAsync(this.image);
      value.imageName = imageUploadResult.newFileName;
    }
    else
    {
      // if we're not uploading a new image, preserve the exsiting image name
      value.imageName = this.villianService.selectedVillian!.imageName;
    }

    await this.villianService.UpdateAsync(this.villianService.selectedVillian!.id, value);

    let villianOut = await this.villianService.GetAsync(this.villianService.selectedVillian!.id);
    this.villianService.Select(villianOut);
    this.router.navigate(['/']);
  }

  public fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if (fileList.length > 0)
      this.image = fileList[0];
  }
}
