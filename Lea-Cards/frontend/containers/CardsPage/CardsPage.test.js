import { render, /* screen */ } from '@testing-library/react';
import CardsPage from './';
// import data from './CardsPage.data';

describe('<CardsPage />', () => {
    it('Renders an empty CardsPage', () => {
        render(<CardsPage />);
    });

    // it('Renders CardsPage with data', () => {
    //     const { container } = render(<CardsPage {...data} />);
    //     expect(container).toMatchSnapshot();
    // });
});
