import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableBehaviourExampleComponent } from './sortable-behaviour-example.component';

describe('SortableBehaviourExampleComponent', () => {
  let component: SortableBehaviourExampleComponent;
  let fixture: ComponentFixture<SortableBehaviourExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortableBehaviourExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableBehaviourExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
