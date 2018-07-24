import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovableDirectiveExampleComponent } from './movable-directive-example.component';

describe('MovableDirectiveExampleComponent', () => {
  let component: MovableDirectiveExampleComponent;
  let fixture: ComponentFixture<MovableDirectiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MovableDirectiveExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovableDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
