import expenseReducer from "../../reducers/expenses";

import { expenses } from "../fixtures/expenseData";

describe("Validate expense reducer", () => {
  test("Should set default state", () => {
    const state = expenseReducer(undefined, { type: "@@init" });
    expect(state).toEqual([]);
  });

  test("Should return add expense updated state", () => {
    const state = expenseReducer(undefined, {
      type: "ADD_EXPENSE",
      expense: {
        id: "1",
        description: "Gum",
        note: "",
        amount: 195,
        createdAt: 0,
      },
    });
    expect(state).toEqual([expenses[0]]);
  });

  test("Should return valid array after removing expense", () => {
    const state = expenseReducer(expenses, {
      type: "REMOVE_EXPENSE",
      id: "1",
    });
    expect(state).toEqual([expenses[1], expenses[2]]);
  });
});
