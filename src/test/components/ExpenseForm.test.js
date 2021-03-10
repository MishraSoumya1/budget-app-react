import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expenses } from "../fixtures/expenseData";
import moment from "moment";

describe("test expense form", () => {
  test("Should render snapshot", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Render Expense form with data", () => {
    const wrapper = shallow(<ExpenseForm expense={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit", {
      preventDefault: function () {},
    });
    expect(wrapper.state("error")).toBe(
      "Please provide description and amount."
    );
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  test("Should set description on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find("input")
      .at(0)
      .simulate("change", {
        target: {
          value: "Test description",
        },
      });
    expect(wrapper.state("description")).toBe("Test description");
    expect(wrapper).toMatchSnapshot();
  });

  test("Should set amount on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: {
          value: "23.45",
        },
      });
    expect(wrapper.state("amount")).toBe("23.45");
    expect(wrapper).toMatchSnapshot();
  });

  test("Should set amount on invalid input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper
      .find("input")
      .at(1)
      .simulate("change", {
        target: {
          value: "23.455",
        },
      });
    expect(wrapper.state("amount")).toBe("");
    expect(wrapper).toMatchSnapshot();
  });

  test("Should set note on input change", () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", {
      target: {
        value: "Test note",
      },
    });
    expect(wrapper.state("note")).toBe("Test note");
    expect(wrapper).toMatchSnapshot();
  });

  test("Should call onsubmit prop for valid submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
      <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
    );
    wrapper.find("form").simulate("submit", {
      preventDefault: function () {},
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      amount: 195,
      createdAt: 0,
      description: "Gum",
      note: "",
    });
  });

  test("Should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("withStyles(SingleDatePicker)").at(0).prop("onDateChange")(
      now
    );
    expect(wrapper.state("createdAt")).toBe(now);
  });
});
