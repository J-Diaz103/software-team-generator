const Engineer = require("../lib/Engineer");

test("Can set GitHUb account with constructor", () => {
  const userGit = "GitHubUser";
  const employee = new Engineer("user", 1, "test@test.com", userGit);
  expect(employee.github).toBe(userGit);
});