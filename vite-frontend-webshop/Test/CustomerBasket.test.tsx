import {fireEvent, render, screen} from "@testing-library/react";
import {describe, expect, it, vi} from "vitest";
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

    it("should call onClick when the button is clicked",async () => {

        // Render the component that contains the button
        render(<CustomerBasket/>);
        //finds all count elements
        const count = screen.getAllByTestId("count");
        //expects the first count element to be the starting value 1
        expect(count[0]).toHaveTextContent("1")
        //finds all increment buttons
        const incrementButton =screen.getAllByTestId("increment");
        //clicks the first button found
        await userEvent.click(incrementButton[0]);
        //finds all count elements
        const count1 = screen.getAllByTestId("count");
        //expects the first count element to have incremented
        expect(count1[0]).toHaveTextContent("2")



    });

    it("should remove item", async() => {

        vi.spyOn(window, 'confirm').mockImplementation(() => true);
        // Render the component that contains the button
        render(<CustomerBasket/>);
        //expects the product to be in the document
        expect(screen.queryByText('vitamin-d-90-100')).toBeInTheDocument();
        //get the remove button
        const removeButtons =screen.getAllByTestId("remove");
        //click the remove button
        await userEvent.click(removeButtons[0])
        //expect the window.confirm to be called
        expect(window.confirm).toHaveBeenCalledTimes(1);
        //expect the product to be removed
        expect(screen.queryByText('vitamin-d-90-100')).not.toBeInTheDocument();
    });
});

