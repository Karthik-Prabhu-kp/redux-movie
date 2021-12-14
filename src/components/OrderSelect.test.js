import React from "react";
import reactDom from "react-dom";
import { fireEvent, getByTestId } from "@testing-library/react"
import { render } from "../test-utils";
import {OrderSelect} from "./OrderSelect";
import store from '../store';



describe("OrderSelect component", () => {

    it("rendered form and select for sort", () => {
        const {getByTestId} = render(<OrderSelect />);
        const form = getByTestId('formSort'); 
        expect(form).toBeTruthy();
    });


    it("movie list displayed on render with unordered list", () => {
        const {getByTestId} = render(<OrderSelect />);
        const movieList = getByTestId('movieList');
        expect(movieList).toBeTruthy();
    })
});

