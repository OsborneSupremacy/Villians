import { TestBed } from '@angular/core/testing';
import { DataService } from './data-service';

describe('DataService', () => {

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should create an instance', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
