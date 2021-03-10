import expense from "../../selectors/expenses";

import { expenses } from "../fixtures/expenseData";

describe("validate expense filter function", () => {
  test("should filter text value", () => {
    const filters = {
      text: "e",
      sortBy: "date",
      startDate: undefined,
      endDate: undefined,
    };
    const result = expense(expenses, filters);
    expect(result).toEqual([expenses[1]]);
  });
});
