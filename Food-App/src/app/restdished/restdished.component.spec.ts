import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestdishedComponent } from './restdished.component';

describe('RestdishedComponent', () => {
  let component: RestdishedComponent;
  let fixture: ComponentFixture<RestdishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestdishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestdishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
