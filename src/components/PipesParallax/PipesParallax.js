import useAppService from '../../services/AppService';
import { useState, useEffect } from 'react';
import useParallax from '../hooks/useParallax/useParallax';

import pipes from '../../resources/img/pipes-parallax.jpg';

const PipesParallax = () => {
    const [state, setState] = useState({});

    const { getData, getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        // const pipesParallax = getData('pipesParallax');
        // onLoaded(pipesParallax);

        getContentSection('pipes')
            // .then(console.log)
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
    }

    const { alt, link } = state;
    const pipesParallax = useParallax(link, alt);

    return (
        <>
            { pipesParallax }
        </>
    )
}

export default PipesParallax;