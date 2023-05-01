// @ts-ignore

import {fireEvent, render, screen} from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CustomerBasketScroll from "../src/components/CustomerBasketScroll";
import Payment from "../src/components/Payment";


describe(CustomerBasketScroll.name, () => {

    it('if basket is empty', async () => {
        render(<CustomerBasketScroll/>);
        const emptyBasketMessage = screen.getByTestId('goodluck');
        expect(emptyBasketMessage).toBeInTheDocument();
        expect(emptyBasketMessage.textContent).toBe("  Your basket is empty, good luck :)");
    });

    it ("Return to basket should take the customer back to the basket", async () => {
        render(<CustomerBasketScroll/>);
        const { getByText } = render(<Payment />);
        const returnToBasketButton = getByText('Return to Basket');
        fireEvent.click(returnToBasketButton);

        expect(window.location.href).toBe('http://localhost:3000/');
    });

    it('Submit Order should submit the form and take the customer back to the home page', async () => {
        render(<Payment />);
        const submitOrderButton = screen.getByText('Submit Order');
        fireEvent.click(submitOrderButton);

        expect(window.location.href).toBe('http://localhost:3000/');
    });
});

