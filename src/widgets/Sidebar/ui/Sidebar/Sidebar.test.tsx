import { screen, fireEvent } from '@testing-library/react';

import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('check sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('check collapse', () => {
        renderWithTranslation(<Sidebar />);
        const toggleId = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleId);
        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar');
        fireEvent.click(toggleId);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
