import { screen, fireEvent } from '@testing-library/react';

import { ComponentRender } from 'shared/config/test/ComponentRender/ComponentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('check sidebar', () => {
        ComponentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('check collapse', () => {
        ComponentRender(<Sidebar />);
        const toggleId = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleId);
        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar');
        fireEvent.click(toggleId);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
