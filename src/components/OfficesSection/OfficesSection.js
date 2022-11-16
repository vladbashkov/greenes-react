import useAppService from '../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../hooks/useSection/useSection';

import './OfficesSection.scss';

const OfficesSection = () => {
    const [state, setState] = useState({}),
          [title, setTitle] = useState(''),
          [content, setContent] = useState([]);

    const { getData, getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        // const officesSection = getData('officesSection');
        // onLoaded(officesSection);

        getContentSection('offices')
            // .then(console.log)
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
        const { sectionTitle, content } = value;

        setTitle(sectionTitle);
        setContent(content);
    }

    const officesSection = useSection(title, content);

    return (
        <div className='section-columns'>
            { officesSection }
        </div>
    )
}

export default OfficesSection;