import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/components/App";
import  CustomerBasketScroll  from "../src/components/CustomerBasketScroll";
import CustomerBasket from "../src/components/App";
import userEvent from "@testing-library/user-event/index";


describe(App.name, () => {

    it("all routes are avaliable", () => {
        render(<App />);
        expect(screen.getByText("Home"));
        expect(screen.getByText("Shop"));
        expect(screen.getByText("About"));
        expect(screen.getByText("Login"));
    });


});
