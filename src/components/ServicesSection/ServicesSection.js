import useAppService from '../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../hooks/useSection/useSection';

import './ServicesSection.scss';

const ServiceSection = () => {
    const [state, setState] = useState({}),
          [title, setTitle] = useState(''),
          [content, setContent] = useState([]);

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('services')
            // .then(console.log)
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
        const { sectionTitle, content } = value;

        setTitle(sectionTitle);
        setContent(content);
    }

    const serviceSection = useSection(title, content);
    const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

    return (
        <div className='section-columns' key={id}>
            { serviceSection }
        </div>
    )
}

export default ServiceSection;