import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroppableBehaviourExampleComponent } from './droppable-behaviour-example.component';

describe('DroppableBehaviourExampleComponent', () => {
  let component: DroppableBehaviourExampleComponent;
  let fixture: ComponentFixture<DroppableBehaviourExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroppableBehaviourExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroppableBehaviourExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
