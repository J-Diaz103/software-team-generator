const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number with constructor argument", () => {
  const office = 100;
  const employee = new Manager("user", 1, "test@test.com", office);
  expect(employee.officeNumber).toBe(office);
});