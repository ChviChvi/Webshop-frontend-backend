import { render, screen} from "@testing-library/react";
import {describe, expect, it, vi} from "vitest";
import userEvent from "@testing-library/user-event";
import CustomerBasket from "../src/components/App";





describe(CustomerBasket.name,  () => {



    it("should render table headers", async () => {

        await render(<CustomerBasket />);
        await screen.findByText('ID');
        expect(screen.getByText('ID'))
        expect(screen.getByText("name"))
        expect(screen.getByText("price"))
        expect(screen.getAllByText("currency"))
        expect(screen.getByText("rebateQuantity"))
        expect(screen.getByText("rebatePercent"))
        expect(screen.getByText("upsellProductId"))
        expect(screen.getByText("imageUrl"))


    });

    it("should call onClick when the button is clicked",async () => {

        // Render the component that contains the button
        await render(<CustomerBasket/>);
        //finds all count elements
        await screen.findAllByTestId("count");
        const count = await screen.getAllByTestId("count");
        //expects the first count element to be the starting value 1
        await expect(count[0]).toHaveTextContent("1")
        //finds all increment buttons
        await screen.findAllByTestId("increment");
        const incrementButton = await screen.getAllByTestId("increment");
        //clicks the first button found
        await userEvent.click(incrementButton[0]);
        //finds all count elements again
        await screen.findAllByTestId("count");
        const count1 = await screen.getAllByTestId("count");
        //expects the first count element to have incremented
        expect(count1[0]).toHaveTextContent("2")
    });



    it("should remove item", async() => {

        vi.spyOn(window, 'confirm').mockImplementation(() => true);
        // Render the component that contains the button
        await render(<CustomerBasket/>);
        //expects the product to be in the document
        await screen.findByText('D-vitamin, 90ug, 120 stk');
        expect(screen.queryByText('D-vitamin, 90ug, 120 stk')).toBeInTheDocument();
        //get the remove button
        const removeButtons =screen.getAllByTestId("remove");
        console.log("hej"+removeButtons.length)
        //click the remove button
        await userEvent.click(removeButtons[0])
        //expect the window.confirm to be called
        expect(window.confirm).toHaveBeenCalledTimes(1);
        //expect the product to be removed
        expect(screen.queryByText('D-vitamin, 90ug, 120 stk')).not.toBeInTheDocument();
    });
});

