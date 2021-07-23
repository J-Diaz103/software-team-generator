const Intern = require("../lib/Intern");

test("Can set school with constructor", () => {
  const college = "UCI";
  const employee = new Intern("user", 1, "test@test.com", college);
  expect(employee.school).toBe(college);
});