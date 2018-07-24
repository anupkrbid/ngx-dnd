import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDirectiveExampleComponent } from './draggable-directive-example.component';

describe('DraggableDirectiveExampleComponent', () => {
  let component: DraggableDirectiveExampleComponent;
  let fixture: ComponentFixture<DraggableDirectiveExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableDirectiveExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableDirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
