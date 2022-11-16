import useAppService from '../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../hooks/useSection/useSection';

const LogDistSection = () => {
    const [state, setState] = useState({}),
          [content, setContent] = useState([]),
          [title, setTitle] = useState('');

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {
        getContentSection('logistics & distribution')
            .then(onDataLoaded)
    }

    const onDataLoaded = (value) => {
        setState(value);
        const { sectionTitle, content } = value;

        setTitle(sectionTitle);
        setContent(content);
    }

   const aboutSection = useSection(title, content);

    return (
        <>
            { aboutSection }
        </>
    )
}

export default LogDistSection;