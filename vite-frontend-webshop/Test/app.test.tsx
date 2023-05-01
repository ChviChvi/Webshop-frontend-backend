import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/components/App";
import userEvent from "@testing-library/user-event";

describe(App.name, () => {


    // TEST is the NAV being rendered?

    it("all routes are avaliable", () => {
        render(<App />);
        expect(screen.getByText("Home"));
        expect(screen.getByText("Shop"));
        expect(screen.getByText("About"));
        expect(screen.getByText("Login"));
    });

    it("routes are clickable", () => {
        render(<App />);
        const submitButton = screen.getByText("Home");
        const submitButton1 = screen.getByText("Shop");
        const submitButton2 = screen.getByText("About");
        const submitButton3 = screen.getByText("Login");

        userEvent.click(submitButton);
        userEvent.click(submitButton1);
        userEvent.click(submitButton2);
        userEvent.click(submitButton3);

    });
});