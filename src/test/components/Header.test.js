import React from "react";
// import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";
// import toJSON from "enzyme-to-json";
import { shallow } from "enzyme";

describe("shallow render header", () => {
  test("Should render header correctly", () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").length).toBe(1);
  });
});
