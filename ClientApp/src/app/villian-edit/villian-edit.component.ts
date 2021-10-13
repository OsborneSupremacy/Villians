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

  public onSubmit({ value, valid }: { value: Villian, valid: boolean })
  {
    if (!valid) return;

    let onGetSuccess = (result: Villian) => {
      this.villianService.Select(result);
      this.router.navigate(['/']);
    };

    let onEditSuccess = () => {
      this.villianService.Get(this.villianService.selectedVillian!.id, onGetSuccess, onError);
    };

    let onImageUploadSuccess = (result: ImageUploadResult) => {
      value.imageName = result.newFileName;
      this.villianService.Update(this.villianService.selectedVillian!.id, value, onEditSuccess, onError);
    };

    let onError = () => { };

    if(this.image != null)
    {
      this.imageService.Add(this.image, onImageUploadSuccess, onError);
    }
    else
    {
      // if we're not uploading a new image, preserve the exsiting image name
      value.imageName = this.villianService.selectedVillian!.imageName;
      this.villianService.Update(this.villianService.selectedVillian!.id, value, onEditSuccess, onError);
    }
  }

  public fileChange(event: any) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0)
      this.image = fileList[0];
  }
}
