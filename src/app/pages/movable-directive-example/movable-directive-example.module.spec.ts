import { MovableDirectiveExampleModule } from './movable-directive-example.module';

describe('MovableDirectiveExampleModule', () => {
  let movableDirectiveExampleModule: MovableDirectiveExampleModule;

  beforeEach(() => {
    movableDirectiveExampleModule = new MovableDirectiveExampleModule();
  });

  it('should create an instance', () => {
    expect(movableDirectiveExampleModule).toBeTruthy();
  });
});
