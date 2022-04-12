import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionModalComponent } from './formacion-modal.component';

describe('FormacionModalComponent', () => {
  let component: FormacionModalComponent;
  let fixture: ComponentFixture<FormacionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
