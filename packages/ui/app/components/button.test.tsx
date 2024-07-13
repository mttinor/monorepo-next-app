
import React from "react"
import {render, screen} from "@testing-library/react"
import {test,expect} from "vitest"
import Button from "./button"
//

test("Button should be rendered",()=>{
    render(<Button>hellow</Button>)  
    // expect(screen.getByTestId(/hellow/)).toBeInTheDocument() 
})