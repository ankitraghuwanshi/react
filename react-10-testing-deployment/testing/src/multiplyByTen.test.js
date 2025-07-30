import multiplyByTen from "./multiplyByTen"
import {describe, expect ,it} from 'vitest'

//1.test suite (a collection of test)
describe("Testing multiply by ten function",()=>{
    //2.test case (Indivual test that verifies one functionality)
    it("return the correct result",()=>{
        const result = multiplyByTen(10)

        expect(result).toBe(100)
    })

    it("handles the case with no input",()=>{
        const result=multiplyByTen()
        expect(result).toBeNull
    })
})
