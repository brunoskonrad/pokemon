import Effectiveness, {
  RegularEffective,
  NotEffective,
  VeryEffective,
  SuperEffective,
  NotVeryEffective,
  NotSuperEffective
} from "../effectiveness";

describe("Effectiveness", () => {
  describe("for", () => {
    describe("when given value is 0", () => {
      it("returns NotEffective", () => {
        expect(Effectiveness.for(0) instanceof NotEffective).toEqual(true);
      });
    });

    describe("when given value is 1", () => {
      it("returns RegularEffective", () => {
        expect(Effectiveness.for(1) instanceof RegularEffective).toEqual(true);
      });
    });

    describe("when given value is 2", () => {
      it("returns VeryEffective", () => {
        expect(Effectiveness.for(2) instanceof VeryEffective).toEqual(true);
      });
    });

    describe("when given value is 4", () => {
      it("returns SuperEffective", () => {
        expect(Effectiveness.for(4) instanceof SuperEffective).toEqual(true);
      });
    });

    describe("when given value is 0.5", () => {
      it("returns NotVeryEffective", () => {
        expect(Effectiveness.for(0.5) instanceof NotVeryEffective).toEqual(
          true
        );
      });
    });

    describe("when given value is 0.25", () => {
      it("returns NotSuperEffective", () => {
        expect(Effectiveness.for(0.25) instanceof NotSuperEffective).toEqual(
          true
        );
      });
    });
  });
});
