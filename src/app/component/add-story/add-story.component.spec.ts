import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStoryComponent } from './add-story.component';

describe('AddStoryComponent', () => {
  let component: AddStoryComponent;
  let fixture: ComponentFixture<AddStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
