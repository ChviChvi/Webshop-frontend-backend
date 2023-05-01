// @ts-ignore

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import CustomerBasketScroll from "../src/components/CustomerBasketScroll";


describe(CustomerBasketScroll.name, () => {

    it('if basket is empty', async () => {
        render(<CustomerBasketScroll/>);
        const emptyBasketMessage = screen.getByTestId('goodluck');
        expect(emptyBasketMessage).toBeInTheDocument();
        expect(emptyBasketMessage.textContent).toBe("  Your basket is empty, good luck :)");
    });

    it ("remove top item from basket"), () => {
        render(<CustomerBasketScroll/>);

    });

});
