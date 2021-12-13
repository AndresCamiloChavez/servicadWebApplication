import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassFormComponent } from './new-pass-form.component';

describe('NewPassFormComponent', () => {
  let component: NewPassFormComponent;
  let fixture: ComponentFixture<NewPassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
