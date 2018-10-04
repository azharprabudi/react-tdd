import React from "react";
import { shallow } from "enzyme";
import Gift from "./components/Gift";

describe("Gift", () => {
  const mockRemove = jest.fn();
  const idRemove = 1;
  const props = {
    gift: { person: "", present: "", id: idRemove },
    key: idRemove,
    onRemoveGift: mockRemove
  };

  const gift = shallow(<Gift {...props} />);

  it("it renders correctly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initialize the `state` with the empty person and present", () => {
    expect(gift.state()).toEqual({
      person: "",
      present: ""
    });
  });

  /* bdd when user change the input */

  describe("when user change the text input", () => {
    describe("change the person", () => {
      const personName = "azhar";
      beforeEach(() => {
        gift
          .find(".input-person")
          .simulate("change", { target: { value: personName } });
      });

      it(`the state should be ${personName}`, () => {
        expect(gift.state().person).toEqual(personName);
      });
    });

    describe("change the present", () => {
      const presentName = "tamiya";
      beforeEach(() => {
        gift
          .find(".input-present")
          .simulate("change", { target: { value: presentName } });
      });

      it(`the state should be ${presentName}`, () => {
        expect(gift.state().present).toEqual(presentName);
      });
    });
  });

  describe("when clicking `remove gift` button", () => {
    beforeEach(() => {
      gift.find(".btn-remove-gift").simulate("click");
    });

    it("call the onRemoveGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(idRemove);
    });
  });
});
