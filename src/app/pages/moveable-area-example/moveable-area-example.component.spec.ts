import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveableAreaExampleComponent } from './moveable-area-example.component';

describe('MoveableAreaExampleComponent', () => {
  let component: MoveableAreaExampleComponent;
  let fixture: ComponentFixture<MoveableAreaExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveableAreaExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveableAreaExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
