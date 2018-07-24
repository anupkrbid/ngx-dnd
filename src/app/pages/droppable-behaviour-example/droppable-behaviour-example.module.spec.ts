import { DroppableBehaviourExampleModule } from './droppable-behaviour-example.module';

describe('DroppableBehaviourExampleModule', () => {
  let droppableBehaviourExampleModule: DroppableBehaviourExampleModule;

  beforeEach(() => {
    droppableBehaviourExampleModule = new DroppableBehaviourExampleModule();
  });

  it('should create an instance', () => {
    expect(droppableBehaviourExampleModule).toBeTruthy();
  });
});
