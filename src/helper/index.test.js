import { maxNumber } from "./index";

describe("max number function", () => {
  describe("given the empty array", () => {
    it("return 0", () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe("given the non empty array", () => {
    it("return 3", () => {
      expect(maxNumber([1, 2, 3])).toEqual(3);
    });
  });
});
