import useAppService from '../../services/AppService';
import { useState, useEffect } from 'react';
import useSection from '../hooks/useSection/useSection';

import './ProductsSection.scss';

const ProductsSection = () => {
    const [state, setState] = useState({}),
          [title, setTitle] = useState(''),
          [content, setContent] = useState([]);

    const { getContentSection } = useAppService();

    useEffect(() => {
        onRequest();
    }, []);

    const onRequest = () => {

        getContentSection('products')
            .then(onLoaded)
    }

    const onLoaded = (value) => {
        setState(value);
        const { sectionTitle, content } = value;

        setTitle(sectionTitle);
        setContent(content);
    }

    const productsSection = useSection(title, content);
    const id = Math.floor(Math.random() * (1983852 - 1204954) + 1853450);

    return (
        <div className='section-columns section-products' key={id}>
            { productsSection }
        </div>
    )
}

export default ProductsSection;