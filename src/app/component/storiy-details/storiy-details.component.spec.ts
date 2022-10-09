import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriyDetailsComponent } from './storiy-details.component';

describe('StoriyDetailsComponent', () => {
  let component: StoriyDetailsComponent;
  let fixture: ComponentFixture<StoriyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoriyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoriyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
