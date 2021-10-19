import {render,screen} from "@testing-library/react"
import HeaderElement from "../elements/header/header"

describe("Header Component",()=>{
    it("Prueba de titulo",()=>{
        render(<HeaderElement title="Prueba de titulo"/>)
        expect(screen.queryByText(/Prueba de titulo/i)).toBeInTheDocument();
    })
})