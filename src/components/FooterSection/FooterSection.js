import useAppService from '../../services/AppService';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './FooterSection.scss';

const FooterSection = () => {
    const [state, setState] = useState({});

    const { getData, getResource } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        // const copyright = getData('copyright');
        // onLoaded(copyright);

        getResource('footer')
            // .then(console.log)
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { logo, alt, copyright } = state;
    return (
        <div className="footer-section">
            <Link to="/" className="logo">
                <img src={ logo } alt={ alt } />
            </Link>
            <p className="footer-text">
                { copyright }
            </p>
        </div>
    )
}

export default FooterSection;