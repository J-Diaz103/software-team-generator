const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create and object with a name and age if provided with valid arguments", () => {
            const employee = new Employee("tod",123,'tod@test.com');
            
            expect(employee.name).toBe("tod");
            expect(employee.id).toEqual(123);
            expect(employee.email).toBe("tod@test.com");
        });
    })
})