/* global module */

import React from 'react';
import CardsPage from './CardsPage';
import data from './CardsPage.data';

const CardsPageStory = {
    title: 'Containers/CardsPage',
    component: CardsPage,
};
export default CardsPageStory;

export const CardsPageWithData = () => <CardsPage {...data} />;
export const CardsPageWithoutData = () => <CardsPage />;
