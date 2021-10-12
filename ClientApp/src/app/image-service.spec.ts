import { TestBed } from '@angular/core/testing';
import { ImageService } from './image-service';

describe('ImageService', () => {
  it('should create an instance', () => {
    const service: ImageService = TestBed.get(ImageService);
    expect(service).toBeTruthy();

  });
});
