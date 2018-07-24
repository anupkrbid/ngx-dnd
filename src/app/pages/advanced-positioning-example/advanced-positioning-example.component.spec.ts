import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedPositioningExampleComponent } from './advanced-positioning-example.component';

describe('AdvancedPositioningExampleComponent', () => {
  let component: AdvancedPositioningExampleComponent;
  let fixture: ComponentFixture<AdvancedPositioningExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedPositioningExampleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedPositioningExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
