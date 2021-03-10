import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123" });
  expect(action).toEqual({ id: "123", type: "REMOVE_EXPENSE" });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123", "test");
  expect(action).toEqual({ id: "123", updates: "test", type: "EDIT_EXPENSE" });
});

test("Should setup add expense action object", () => {
  const action = addExpense({
    description: "test",
    note: "test",
    amount: 10,
    createdAt: 10,
  });
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "test",
      note: "test",
      amount: 10,
      createdAt: 10,
    },
  });
});

test("Should add expenses without any data", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});
