import { SortableBehaviourExampleModule } from './sortable-behaviour-example.module';

describe('SortableBehaviourExampleModule', () => {
  let sortableBehaviourExampleModule: SortableBehaviourExampleModule;

  beforeEach(() => {
    sortableBehaviourExampleModule = new SortableBehaviourExampleModule();
  });

  it('should create an instance', () => {
    expect(sortableBehaviourExampleModule).toBeTruthy();
  });
});
