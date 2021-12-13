import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveryPassFormComponent } from './recovery-pass-form.component';

describe('RecoveryPassFormComponent', () => {
  let component: RecoveryPassFormComponent;
  let fixture: ComponentFixture<RecoveryPassFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecoveryPassFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveryPassFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
