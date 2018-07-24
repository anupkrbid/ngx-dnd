import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveableDirectiveExampleComponent } from './moveable-directive-example.component';

describe('MoveableDirectiveExampleComponent', () => {
  let component: MoveableDirectiveExampleComponent;
  let fixture: ComponentFixture<MoveableDirectiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveableDirectiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveableDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
