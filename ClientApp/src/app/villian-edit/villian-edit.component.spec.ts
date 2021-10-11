import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillianEditComponent } from './villian-edit.component';

describe('VillianEditComponent', () => {
  let component: VillianEditComponent;
  let fixture: ComponentFixture<VillianEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillianEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillianEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
