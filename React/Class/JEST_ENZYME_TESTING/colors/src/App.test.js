import React from "react";
import App, {colors, randColor, randNum} from "./App";

import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

// it("renders without crashing", () => {
//   const wrapper = shallow(<App />);
//   console.log(wrapper.debug())
//   const appComponent = wrapper.find('.App')
//   console.log(appComponent.debug())
//   const appComponent2 = wrapper.find('[data-test="app-component"]')
//   console.log(appComponent2.debug())
//  });

describe("Background state of color", () => {
  it("has an initial state for the background of purple", () => {
    const wrapper = shallow(<App />);
    const initialBackgroundColorState = wrapper
      .find('[data-test="app-component"]')
      .prop("style");
    console.log(initialBackgroundColorState);
    expect(initialBackgroundColorState).toEqual({ backgroundColor: "purple" });
  });
});

describe("Color array", () => {
  describe("Array Tests", () => {
    it("contains an array of at least 3 colors", () => {
      expect(colors.length).toBeGreaterThanOrEqual(3);
    });
  
    it("contains an array with at least red, blue, and green as values", () => {
      const values = ["red", "blue", "green"];
      expect(colors).toEqual(expect.arrayContaining(values));
    });
  });
});

describe("Button", () => {
  it("does a button exist", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("button");
    expect(button.length).toBe(1);
  });

  it("button clicked with an event", () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find("button")
    button.simulate('click')
    wrapper.update()
    const updatedBackgroundColorState = wrapper
      .find('[data-test="app-component"]')
      .prop("style");
      expect(updatedBackgroundColorState).not.toEqual({ backgroundColor: "purple" });
  });
});

describe("Random color generator", () => {
  it("function that randomizes colors", () => {
    expect(randNum).toBeTruthy()
  
  });
  it("picks a number greater than or equal to  0 AND less than the length of the color array", () => {
    expect(randNum()).toBeGreaterThanOrEqual(0)
    expect(randNum()).toBeLessThan(colors.length)
    
  });
});
