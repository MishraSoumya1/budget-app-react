import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import { expenses } from "../fixtures/expenseData";

let onSubmit, history, wrapper;

beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});

describe("Validating add expense page", () => {
  test("validate add expense functionality", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Should handle onSubmit", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")({
      description: "Gum",
      note: "",
      amount: 195,
      createdAt: 0,
    });
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(onSubmit).toHaveBeenLastCalledWith({
      description: "Gum",
      note: "",
      amount: 195,
      createdAt: 0,
    });
  });
});
