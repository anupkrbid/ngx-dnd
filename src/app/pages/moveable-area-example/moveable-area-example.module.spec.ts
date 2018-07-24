import { MoveableAreaExampleModule } from './moveable-area-example.module';

describe('MoveableAreaExampleModule', () => {
  let moveableAreaExampleModule: MoveableAreaExampleModule;

  beforeEach(() => {
    moveableAreaExampleModule = new MoveableAreaExampleModule();
  });

  it('should create an instance', () => {
    expect(moveableAreaExampleModule).toBeTruthy();
  });
});
