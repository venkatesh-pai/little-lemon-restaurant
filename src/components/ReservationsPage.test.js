import { render, screen } from "@testing-library/react";
import ReservationsPage from './ReservationsPage';

test('Renders the Reservations Page heading', () => {
    render(<ReservationsPage />);
    const headingElement = screen.getByText("Indulge in the ideal blend of tradition and opulence.");
    expect(headingElement).toBeInTheDocument();
})