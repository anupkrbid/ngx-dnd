import { MoveableDirectiveExampleModule } from './moveable-directive-example.module';

describe('MoveableDirectiveExampleModule', () => {
  let moveableDirectiveExampleModule: MoveableDirectiveExampleModule;

  beforeEach(() => {
    moveableDirectiveExampleModule = new MoveableDirectiveExampleModule();
  });

  it('should create an instance', () => {
    expect(moveableDirectiveExampleModule).toBeTruthy();
  });
});
