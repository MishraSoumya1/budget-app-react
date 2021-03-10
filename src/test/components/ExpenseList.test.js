import React from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import { expenses } from "../fixtures/expenseData";

describe("expenselist is rendering the component properly", () => {
  test("validate list rendered properly", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
  });
});
