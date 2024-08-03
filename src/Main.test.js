import { fireEvent, getByText, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Main from "./Main";

describe('Proper routing', () => {
    

    test("DefaultPage", () => {
        render(<Main />);
        expect(screen.getByText("This weeks specials!")).toBeInTheDocument();
    });

    test("Reservation button", () => {
        render(<Main />);
        const reservationButton = screen.getByRole('button', {name:"Reserve a Table"})
        fireEvent.click(reservationButton);

        const submitButton = screen.getByRole('button', {name:"Make your reservation"});
        expect(submitButton).toBeInTheDocument();
    })
})
