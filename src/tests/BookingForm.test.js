import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React, {useReducer} from "react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../components/Main";

test("Changes available times", () => {
    const updateTimes = jest.fn();
    render(<BookingForm availableTimes={[]} dispatch={updateTimes} />);

    const resTime = screen.getByLabelText("Choose time");
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, {target: {value: '2024-08-04'}});

    expect(updateTimes).toHaveBeenCalled();
})

test("Changing fields", () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);

    const date = '2024-08-05';
    const guests = "6";
    const occasion = "Birthday";

    const dateInput = screen.getByLabelText("Choose date");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionInput = screen.getByLabelText("Occasion");

    fireEvent.change(dateInput, {target: {value: date}});
    fireEvent.change(guestsInput, {target: {value: guests}});
    fireEvent.change(occasionInput, {target: {value: occasion}});

    expect(dateInput.value).toBe(date);
    expect(guestsInput.value).toBe(guests);
    expect(occasionInput.value).toBe(occasion);
})

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn}/>);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test("initialTimes function properly initializes", () => {
    const result = initializeTimes();
    expect(result).toEqual([]);
})

test("updateTimes returns same value provided in state", () => {
    const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = updateTimes(undefined, undefined);
    expect(result).toEqual(expectedTimes);
})