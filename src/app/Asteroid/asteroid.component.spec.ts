import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidComponent } from './asteroid.component';

describe('Asteroid', () => {
  let component: AsteroidComponent;
  let fixture: ComponentFixture<AsteroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsteroidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsteroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
