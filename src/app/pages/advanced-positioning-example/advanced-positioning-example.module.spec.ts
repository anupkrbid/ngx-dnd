import { AdvancedPositioningExampleModule } from './advanced-positioning-example.module';

describe('AdvancedPositioningExampleModule', () => {
  let advancedPositioningExampleModule: AdvancedPositioningExampleModule;

  beforeEach(() => {
    advancedPositioningExampleModule = new AdvancedPositioningExampleModule();
  });

  it('should create an instance', () => {
    expect(advancedPositioningExampleModule).toBeTruthy();
  });
});
