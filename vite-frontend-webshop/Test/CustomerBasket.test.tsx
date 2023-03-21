import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import CustomerBasket from "../src/components/App";


describe(CustomerBasket.name, () => {


    it("should render table headers", () => {
        render(<CustomerBasket />);
        expect(screen.getByText("Product")).toBeInTheDocument();
        expect(screen.getByText("Price")).toBeInTheDocument();
        expect(screen.getByText("Quantity")).toBeInTheDocument();
        expect(screen.getByText("Total")).toBeInTheDocument();
        //expect(screen.getByText("Remove")).toBeInTheDocument();
        expect(screen.getByText("Quantity for rebate")).toBeInTheDocument();
        expect(screen.getByText("Recommended for you")).toBeInTheDocument();
        expect(screen.getByText("Total price:")).toBeInTheDocument();
        expect(screen.getByText("Go to checkout")).toBeInTheDocument();
    });

    it("should call onClick when the button is clicked", () => {
        // Render the component that contains the button
        render(<CustomerBasket/>);

        // Select the button by its text content

        // Simulate a click event on the button
        userEvent.click(document.getElementById('increment'));

        // Expect that the onClick function was called
        expect(document.getElementById('count')).value = '2'

    });


});

