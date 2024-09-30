import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritecompComponent } from './favoritecomp.component';

describe('FavoritecompComponent', () => {
  let component: FavoritecompComponent;
  let fixture: ComponentFixture<FavoritecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
