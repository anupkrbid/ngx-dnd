import { MovableAreaExampleModule } from './movable-area-example.module';

describe('MovableAreaExampleModule', () => {
  let movableAreaExampleModule: MovableAreaExampleModule;

  beforeEach(() => {
    movableAreaExampleModule = new MovableAreaExampleModule();
  });

  it('should create an instance', () => {
    expect(movableAreaExampleModule).toBeTruthy();
  });
});
