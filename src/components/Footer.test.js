import React from "react";
import { fireEvent, getByTestId } from "@testing-library/react"
import { render } from "../test-utils";
import {OrderSelect} from "./OrderSelect";
import Footer from "./Footer";


describe("Footer component", () => {

    it("renders footer component div", () => {
        const {getByTestId} = render(<Footer />);
        const footer = getByTestId('footerDisplay'); 
        expect(footer).toBeTruthy();
    });

});