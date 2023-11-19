import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

describe("Contact us page test case",()=>{
    it("Should load Contact us page component",()=>{
        render(<Contact/>)
       const heading= screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument()
    })
    
    it("Should load button inside Contact  page component",()=>{
        render(<Contact/>)
       const button= screen.getByText("Submit");
    
        expect(button).toBeInTheDocument()
    })
    it("Should load 2 input box inside Contact  page component",()=>{
        render(<Contact/>)
       const inputBoxes= screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2)
    })
    
    test("Should load input name inside Contact  page component",()=>{
        render(<Contact/>)
       const inputName= screen.getByPlaceholderText("name")
    
        expect(inputName).toBeInTheDocument()
    })
})

