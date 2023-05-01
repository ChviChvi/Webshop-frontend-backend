import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from "vitest";
import Homepage from "../src/components/Homepage";
describe(Homepage.name, () => {
    it("route on click", () => {
        render(<Homepage />);
        const submitButton = screen.getByText(/Home/i);
        userEvent.click(submitButton);
        expect(screen.getByText("Home"));
    });
});