import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import React, {useReducer} from "react";
import BookingForm from "../components/BookingForm";
import { initializeTimes, updateTimes } from "../components/Main";
import { BrowserRouter} from "react-router-dom";

test("Changes available times", () => {
    const updateTimes = jest.fn();
    render(<BrowserRouter><BookingForm availableTimes={[]} dispatch={updateTimes} /></BrowserRouter>);

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

test("Form doesn't submit", () => {
    render(
        <BrowserRouter>
            <BookingForm availableTimes={[]} dispatch={jest.fn()} />
        </BrowserRouter> 
    );
    const submitButton = screen.getByRole('button', {name: "Make your reservation"})
    fireEvent.click(submitButton);
    expect(screen.getByText("Book Now")).toBeInTheDocument();
})

test("Form does submit", () => {

    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn(() => true);
    render(
        <BrowserRouter>
            <BookingForm availableTimes={["00:00"]} dispatch={mockDispatch} submitForm={mockSubmitForm} />
        </BrowserRouter> 
    );

    const dateInput = screen.getByLabelText("Choose date");
    const timeInput = screen.getByLabelText("Choose time");
    const occasionInput = screen.getByLabelText("Occasion");

    fireEvent.change(dateInput, {target: {value: '2024-08-03'}});
    fireEvent.change(occasionInput, {target: {value: "birthday"}});
    fireEvent.change(timeInput, {target: {value: "00:00"}});

    const submitButton = screen.getByRole('button', {name: "Make your reservation"})
    fireEvent.click(submitButton);

    expect(mockSubmitForm).toHaveBeenCalled();
})

test("Form input validation", () => {
    const mockDispatch = jest.fn();
    const mockSubmitForm = jest.fn(() => true);
    render(
        <BrowserRouter>
            <BookingForm availableTimes={["00:00"]} dispatch={mockDispatch} submitForm={mockSubmitForm} />
        </BrowserRouter> 
    );

    const occasionInput = screen.getByLabelText("Occasion");
    fireEvent.change(occasionInput, {target: {value: "birthday"}});
    fireEvent.change(occasionInput, {target: {value: "occasion"}});
    expect(screen.getByText("Please choose an occasion for your reservation")).toBeInTheDocument();
})