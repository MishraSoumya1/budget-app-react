const add = (a, b) => a + b;
const hellogenerateString = (name) => `Hello ${name}!`;

test("Should add 2 numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("Should return valid string", () => {
  const result = hellogenerateString("Soumya");
  expect(result).toBe("Hello Soumya!");
});
