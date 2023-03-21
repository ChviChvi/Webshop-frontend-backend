/*
import { render, fireEvent, screen } from '@testing-library/react';
import CustomerCheckout from '../src/components/CustomerCheckout';


describe('CustomerCheckout', () => {
    // afterEach(() => {
    it('should update the form values when the user types in them', () => {
        render(<CustomerCheckout/>);


        const firstNameInput = screen.getByPlaceholderText('Firstname');
        const lastNameInput = screen.getByPlaceholderText('Lastname');
        const emailInput = screen.getByPlaceholderText('E-mail');
        const addressInput = screen.getByPlaceholderText('Address');
        const cityInput = screen.getByPlaceholderText('City');
        const countryInput = screen.getByPlaceholderText('Country');
        const postNumberInput = screen.getByPlaceholderText('PostNumber');
        const phoneInput = screen.getByPlaceholderText('Phone');


        fireEvent.change(firstNameInput, { target: { value: 'Jon' } });
        fireEvent.change(lastNameInput, { target: { value: 'Ela' } });
        fireEvent.change(emailInput, { target: { value: 'jonEla@xxxxx.com' } });
        fireEvent.change(addressInput, { target: { value: '12 B  St.' } });
        fireEvent.change(cityInput, { target: { value: 'Any_town' } });
        fireEvent.change(countryInput, { target: { value: 'Denmark' } });
        fireEvent.change(postNumberInput, { target: { value: '5700' } });
        fireEvent.change(phoneInput, { target: { value: '22 22 22 22' } });

        expect(firstNameInput);
        expect(lastNameInput);
        expect(emailInput);
        expect(addressInput);
        expect(cityInput);
        expect(countryInput);
        expect(postNumberInput);
        expect(phoneInput);
    });

        test('should update the subscribe checkbox when clicked', () => {
            render(<CustomerCheckout />);

            const subscribeCheckbox = screen.getByLabelText('Subscribe to our newsletter?');

            expect(subscribeCheckbox); //.not.toBeChecked();

            fireEvent.click(subscribeCheckbox);

            expect(subscribeCheckbox) ; // .toBeChecked();
    });
})

 */
