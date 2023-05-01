// @ts-ignore
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from "vitest";
import CustomerCheckout from '../src/components/CustomerCheckout';

describe(CustomerCheckout.name, () => {
    // The test function will be added in the next step


 it('form validation and submission', async () => {
    render(<CustomerCheckout />);

    const firstNameInput = screen.getByPlaceholderText('Firstname');
    const lastNameInput = screen.getByPlaceholderText('Lastname');
    const emailInput = screen.getByPlaceholderText('E-mail');
    const addressInput = screen.getByPlaceholderText('Address');
    const countryInput = screen.getByPlaceholderText('Country');
    const postNumberInput = screen.getByPlaceholderText('PostNumber');
    const cityInput = screen.getByPlaceholderText('City');
    const phoneInput = screen.getByPlaceholderText('Phone');
    const conditionsInput = screen.getByLabelText(/I Accept The Terms & Conditions/i);
    const submitButton = screen.getByText(/Go to Payment Methods/i);

    // Attempt to submit the form with empty fields
    userEvent.click(submitButton);

    // Expect required input validation error messages
    await waitFor(() => {
        expect(firstNameInput).toHaveAttribute('required');
        expect(lastNameInput).toHaveAttribute('required');
        expect(emailInput).toHaveAttribute('required');
        expect(addressInput).toHaveAttribute('required');
        expect(countryInput).toHaveAttribute('required');
        expect(postNumberInput).toHaveAttribute('required');
        expect(cityInput).toHaveAttribute('required');
        expect(phoneInput).toHaveAttribute('required');
        expect(conditionsInput).toHaveAttribute('required');
    });

    // Fill out the form with valid data
    userEvent.type(firstNameInput, 'John');
    userEvent.type(lastNameInput, 'Doe');
    userEvent.type(emailInput, 'john.doe@example.com');
    userEvent.type(addressInput, 'Gadevej 123');
    userEvent.type(postNumberInput, '2020');
    userEvent.type(cityInput, 'Copenhagen');
    userEvent.type(phoneInput, '12345678');
    userEvent.click(conditionsInput);

    // Submit the form
    userEvent.click(submitButton);

    // Add the assertion to check successful form submission
    // This part depends on your specific form submission logic
});
});