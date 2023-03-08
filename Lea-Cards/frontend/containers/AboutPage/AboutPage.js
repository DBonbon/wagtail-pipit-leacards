import React, { PureComponent } from 'react';

// import i18n from '../../i18n';
import PropTypes from 'prop-types';
import { basePageWrap } from '../BasePage';
import s from './AboutPage.module.css';

class AboutPage extends PureComponent {
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
            <div className={s['AboutPage']}>
                <p>Company name: {companyName}</p>
            </div>
        );
    }
}

export default basePageWrap(AboutPage);
