import { GeneralResponse } from './response';

describe('GeneralResponse', () => {
  it('should be defined', () => {
    expect(new GeneralResponse(200, "lol", "lol")).toBeDefined();
  });
});
