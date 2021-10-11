import { TestBed } from '@angular/core/testing';
import { VillianService } from './villian-service';

describe('VillianService', () => {
  it('should create an instance', () => {
    const service: VillianService = TestBed.get(VillianService);
    expect(service).toBeTruthy();
  });
});
