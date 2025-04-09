import { addNumbers, subtractNumbers, multiplyNumbers } from "../src/utils/math"

//describe (tag to group tests together)
describe("Math functions", () => {
    
    //declare a test
    test("adding two numbers", () => {
        //Arrange
        const a = 5
        const b = 7

        //Act
        const result = addNumbers(a, b)

        //Assert
        expect(result).toBe(12)
        expect(result).toBeDefined()
    })

    test("subtract two numbers", () => {
        //Arrange
        const a = 12
        const b = 5

        //Act
        const result = subtractNumbers(a, b)
        
        //Assert
        expect(result).toBe(7)
        expect(result).toBeDefined()
    })
})

//multiply 3 numbers

describe("Multuplication", () => {

    test("multiplying three numbers", () => {
        //Arrange
        const a = 2
        const b = 3
        const c = 4

        //Act
        const result = multiplyNumbers(a, b, c)

        //Assert
        expect(result).toBe(24)
        expect(result).toBeDefined()


    })
})