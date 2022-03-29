import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedessocialesItemComponent } from './redessociales-item.component';

describe('RedessocialesItemComponent', () => {
  let component: RedessocialesItemComponent;
  let fixture: ComponentFixture<RedessocialesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedessocialesItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedessocialesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
