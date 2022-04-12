import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaModalComponent } from './tecnologia-modal.component';

describe('TecnologiaModalComponent', () => {
  let component: TecnologiaModalComponent;
  let fixture: ComponentFixture<TecnologiaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
