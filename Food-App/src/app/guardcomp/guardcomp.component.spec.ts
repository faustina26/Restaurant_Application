import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardcompComponent } from './guardcomp.component';

describe('GuardcompComponent', () => {
  let component: GuardcompComponent;
  let fixture: ComponentFixture<GuardcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuardcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
