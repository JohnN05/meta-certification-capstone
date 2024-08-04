import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React, {useReducer} from "react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../components/Main";
import { BrowserRouter} from "react-router-dom";

test("Changes available times", () => {
    const updateTimes = jest.fn();
    render(
    <BrowserRouter>
        <BookingForm availableTimes={[]} dispatch={updateTimes} />
    </BrowserRouter>);

    const resTime = screen.getByLabelText("Choose time");
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, {target: {value: '2024-08-04'}});

    expect(updateTimes).toHaveBeenCalled();
})

test("Changing fields", () => {
    render(
        <BrowserRouter>
            <BookingForm availableTimes={[]} dispatch={jest.fn()} />
        </BrowserRouter> 
    );

    const date = '2024-08-05';
    const occasion = "birthday";

    const dateInput = screen.getByLabelText("Choose date");
    const occasionInput = screen.getByLabelText("Occasion");

    fireEvent.change(dateInput, {target: {value: date}});
    fireEvent.change(occasionInput, {target: {value: occasion}});

    expect(dateInput.value).toBe(date);
    expect(occasionInput.value).toBe(occasion);
})

test("initialTimes function properly initializes", () => {
    const result = initializeTimes();
    expect(result.length).toBeGreaterThan(0);
})

test("updateTimes returns same value provided in state", () => {
    const randomDay = Math.ceil(Math.random() * 10);
    const result = updateTimes(undefined, {type: 1});
    expect(result.length).toBeGreaterThan(2);
})