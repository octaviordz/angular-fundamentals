import { FistModuleModule } from './fist-module.module';

describe('FistModuleModule', () => {
  let fistModuleModule: FistModuleModule;

  beforeEach(() => {
    fistModuleModule = new FistModuleModule();
  });

  it('should create an instance', () => {
    expect(fistModuleModule).toBeTruthy();
  });
});
