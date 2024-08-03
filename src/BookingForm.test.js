import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

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