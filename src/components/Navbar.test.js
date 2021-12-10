import React from "react";
import { fireEvent, getByTestId } from "@testing-library/react"
import { render } from "../test-utils";
import Navbar from "./Navbar";


describe("Navbar component", () => {

    it("renders Navbar component nav", () => {
        const {getByTestId} = render(<Navbar />);
        const nav = getByTestId('navbarDisplay'); 
        expect(nav).toBeTruthy();
    });

});