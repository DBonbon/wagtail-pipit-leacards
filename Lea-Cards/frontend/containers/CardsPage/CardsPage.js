import React, { PureComponent } from 'react';

// import i18n from '../../i18n';
import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './CardsPage.module.css';
import RawHtml from '../../components/RawHtml';
import Hero from '../../components/Hero';

const CardsPage = ({ title, intro }) => {
    return (
        <div className={s.Container}>
            <Hero title={title} />
            <RawHtml html={intro} />
        </div>
    );
};

CardsPage.defaultProps = {
    title: '',
    intro: '',
};

CardsPage.propTypes = {
    title: PropTypes.string.isRequired,
    intro: PropTypes.string,
};

export default basePageWrap(CardsPage);
