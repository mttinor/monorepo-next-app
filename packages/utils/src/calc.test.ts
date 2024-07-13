import {test,expect} from "vitest"
import { add } from "./calc"

test("10 + 20",()=>{
    expect(add(10,20)).toBe(30)
})