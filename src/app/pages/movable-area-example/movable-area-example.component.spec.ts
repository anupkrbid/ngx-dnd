import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovableAreaExampleComponent } from './movable-area-example.component';

describe('MovableAreaExampleComponent', () => {
  let component: MovableAreaExampleComponent;
  let fixture: ComponentFixture<MovableAreaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovableAreaExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableAreaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
