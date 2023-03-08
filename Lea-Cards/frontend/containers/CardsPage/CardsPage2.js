import React, { PureComponent } from 'react';

// import i18n from '../../i18n';
import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './CardsPage.module.css';

class CardsPage extends PureComponent {
    state = {};

    static defaultProps = {
        companyName: '',
    };

    static propTypes = {
        companyName: PropTypes.string,
    };

    render() {
        const { companyName } = this.props;
        return (
            <div className={s['CardsPage']}>
                <p>Company name: {companyName}</p>
            </div>
        );
    }
}

export default basePageWrap(CardsPage);

$
