import {fireEvent, render, screen} from "@testing-library/react";
import {describe, expect, it, vi} from "vitest";
import userEvent from "@testing-library/user-event";
import CustomerBasket from "../src/components/App";
import deletebutton from "../src/components/App"
import counts from '../src/components/CustomerBasket'



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

    it("should call onClick when the button is clicked",async () => {

        // Render the component that contains the button
        render(<CustomerBasket/>);
        //finds all count elements
        const count = screen.getAllByTestId("count");
        //expects the first count element to be the starting value 1
        expect(count[0]).toHaveTextContent("1")
        //finds all increment buttons
        const incrementButton =screen.getAllByTestId("increment");
        //presses the first button found
        await userEvent.click(incrementButton[0]);
        //finds all count elements
        const count1 = screen.getAllByTestId("count");
        //expects the first count element to have incremented
        expect(count1[0]).toHaveTextContent("2")



    });
/*
    it("should remove item", () => {
        // Render the component that contains the button
        render(<CustomerBasket/>);

        // Select the button by its text content
        expect(screen.getByText('vitamin-d-90-100'))
        expect(screen.getByText('vitamin-c-500-250'))
        //expect(screen.getByText('vitamin-c-depot-500-250'))
        expect(screen.getByText('fish-oil-1000-120'))
        expect(screen.getByText('coffee-grinder'))
        expect(screen.findByText('Remove'))


        // Simulate a click event on the button
        userEvent.click(document.getElementById('remove1'));
        expect(screen.getByText("Are you sure"));
        userEvent.click(screen.queryByText('OK'));

        const confirmSpy = vi.spyOn(window, 'confirm')

        // Provide a mock implementation for window.confirm() that returns true
        confirmSpy.mockImplementation(() => true)



        //expect( screen.getByText("OK"));
        expect( screen.getByText("Anuller"));
        expect(screen.getByText('vitamin-d-90-100'))
        expect(screen.getByText('vitamin-c-500-250'))
        expect(screen.getByText('vitamin-c-depot-500-250'))
        expect(screen.getByText('fish-oil-1000-120'))
        expect(screen.getByText('coffee-grinder'))
    });

 */


});

