import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasItemComponent } from './tecnologias-item.component';

describe('TecnologiasItemComponent', () => {
  let component: TecnologiasItemComponent;
  let fixture: ComponentFixture<TecnologiasItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TecnologiasItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
