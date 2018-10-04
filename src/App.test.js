import React from "react";
import { shallow } from "enzyme";
import App from "./components/App";

const app = shallow(<App />);

/*

tdd is a concept to create some testing first before doing a real code to build application

there are approach in tdd :

1. create a test first
2. run a test and that always fail test
3. create an real code
4. test with your own test

bdd is a concept to create some testing depend a behavior person in application, like clicking a button and give some effect or other else

*/

describe("App", () => {
  it("it renders correctly", () => {
    expect(app).toMatchSnapshot();
  });

  it("initiliazes the `state` with an empty list of gifts", () => {
    expect(app.state()).toEqual({
      gifts: []
    });
  });

  /* this is code bdd */
  describe("when button `add gift` click", () => {
    const id = 1;

    /* this function will be called each it */
    beforeEach(() => {
      /* add click button */
      app.find(".btn-add").simulate("click");
    });

    /* this function will be called each it */
    afterEach(() => {
      /* clear state */
      app.setState({ gifts: [] });
    });

    it("add a new gift to `state`", () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it("adds a new gift to the rendered list", () => {
      expect(app.find(".gift-list").children().length).toBe(1);
    });

    it("should be render a gift", () => {
      expect(app.find("Gift").exists()).toBe(true);
    });

    describe("when button `remove gift` click", () => {
      /* this function will be called each it */
      beforeEach(() => {
        app.instance().onRemoveGift(id);
      });

      it("removes the gift from `state`", () => {
        expect(app.state().gifts).toEqual([]);
      });
    });
  });
});
