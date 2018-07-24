import { DraggableDirectiveExampleModule } from './draggable-directive-example.module';

describe('DraggableDirectiveExampleModule', () => {
  let draggableDirectiveExampleModule: DraggableDirectiveExampleModule;

  beforeEach(() => {
    draggableDirectiveExampleModule = new DraggableDirectiveExampleModule();
  });

  it('should create an instance', () => {
    expect(draggableDirectiveExampleModule).toBeTruthy();
  });
});
