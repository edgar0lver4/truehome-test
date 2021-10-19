import {render,screen} from "@testing-library/react"
import LoaderComponent from "../elements/loader/loader";

describe("Loader Component",()=>{
    it("Prueba de titulo",()=>{
        render(<LoaderComponent message="Prueba de loader"/>)
        expect(screen.queryByText(/VOLANDOANDO:Prueba de loader/i)).toBeInTheDocument();
    })
})