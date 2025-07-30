import { render, screen } from '@testing-library/react'
import userEvent, {} from '@testing-library/user-event'
import {describe, expect ,it} from 'vitest'
import Counter from '../Counter'
import '@testing-library/jest-dom';

//1.test suite (a collection of test)
describe("Testing Counter component",()=>{
    //2.test case (Indivual test that verifies one functionality)
    it("rendered correctly",()=>{

        //step-1.render counter component
        render(<Counter/>)

        //step-2.select the UI element
        const a = screen.getByText("Counter 0")
        const b = screen.getByText("increase")
        const c = screen.getByText("decrease")

        //step=3.Assertion(expect)
        expect(a).not.toBeNull()
        expect(b).not.toBeNull()
        expect(c).not.toBeNull()
    })

    it("When clicked on increase, the count should increase by 1", async () => {
        // Step 1: Render the component
        render(<Counter />)

        //step-2: Select the UI
        const increaseButton = screen.getByText("increase")

        //step-3: Simulate Click
        await userEvent.click(increaseButton)

        // 4: Assert the new changes
        const counterText = screen.getByText("Counter 1")
        expect(counterText).not.toBeNull()
    })

    // Homework: Write the same test case, but for decreasing
    // If counter value is 0, my button should be disabled

    it("When clicked on decrease, the button disabled", async () => {
        // Step 1: Render the component
        render(<Counter />)

        //step-2: Select the UI
        const decreaseButton = screen.getByText("decrease")

        //step-3: Simulate Click
        await userEvent.click(decreaseButton)

        // 4: Assert the new changes
        expect(decreaseButton).toBeDisabled()
    })
})